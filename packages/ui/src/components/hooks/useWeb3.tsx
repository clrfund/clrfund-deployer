import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

import { useLocalStorage } from "./useLocalStorage";
import { initOnboard, initNotify } from "./blocknative.default";
import { API as OnboardAPI } from "./types.onboard";
import { API as NotifyAPI } from "./types.notify";

interface Web3Context {
  account: string | null;
  chainId: number | null;
  balance: string | null;
  library: ethers.providers.Web3Provider | null;
  onboard: OnboardAPI | null;
  notify: NotifyAPI | null;
  hasMounted: boolean;
  web3Start: () => Promise<void>;
  web3Connect: () => Promise<boolean | undefined>;
  web3Logout: () => Promise<void>;
}
export const useWeb3: (networkId: number, dappId?: string, theme?: string) => Web3Context = (
  networkId,
  dappId,
  theme = "light"
) => {
  const [account, setAccount] = useState<string | null>("0xdead");
  const [chainId, setChainId] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [library, setLibrary] = useState<ethers.providers.Web3Provider | null>(null);

  const [onboard, setOnboard] = useState<OnboardAPI | null>(null);
  const [notify, setNotify] = useState<NotifyAPI | null>(null);
  const [wallet, setWallet] = useLocalStorage("wallet", "null");

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  //NOTE: this allows us to start BNC async, then trigger side effects on hasMounted
  const web3Start: () => Promise<void> = useCallback(async () => {
    console.log("starting");
    if (!hasMounted) {
      //NOTE: BNC has horrible web3 naming conventions, horrible.
      //DONE: Rename all the things, expose web3 provider, save wallet prefference to local store (only the same of the wallet no user data)
      setOnboard(
        initOnboard(
          {
            address: (_address) => (_address ? setAccount(_address) : null),
            network: (_network) => (_network ? setChainId(_network) : null),
            balance: (_balance) => (_balance ? setBalance(_balance) : null),
            wallet: (_wallet) => {
              if (_wallet && _wallet.provider) {
                setLibrary(new ethers.providers.Web3Provider(_wallet.provider));
                setWallet(_wallet.name);
              } else {
                setLibrary(null);
                setWallet("null");
              }
            },
          },
          networkId
        )
      );
      setNotify(initNotify(networkId));

      setHasMounted(true);
    } else {
      //NOTE: Friendly back up, dont remount instead just trigger wallet prompt
      await web3Connect();
    }
  }, [networkId]);
  // NOTE: Expose magic, checks if ready to transact otherwise prompts user
  const web3Connect: () => Promise<boolean | undefined> = useCallback(async () => {
    if (onboard == null) return;
    if (library) {
      console.log("library detected");
      await onboard.walletSelect();
      await onboard.walletCheck();
    } else if (wallet !== "null") {
      console.log("wallet prefference detected", wallet !== "null");
      await onboard.walletSelect(wallet);
      await onboard.walletCheck();
    }
    console.log("no prefference detected");
    return (await onboard.walletSelect()) ? await onboard.walletCheck() : false;
  }, [library, onboard, wallet]);

  //NOTE: Disconnect from wallet
  const web3Logout: () => Promise<void> = async () => {
    if (onboard == null) return;
    await onboard.walletReset();
  };

  // NOTE: Use theme context to trigger dark/light mode on BNC modals
  useEffect(() => {
    if (notify) notify.config({ darkMode: theme === "dark" ? true : false });
    if (onboard) onboard.config({ darkMode: theme === "dark" ? true : false });
  }, [theme, notify, onboard]);

  return {
    account,
    chainId,
    balance,
    library,
    onboard,
    notify,
    hasMounted,
    web3Start,
    web3Connect,
    web3Logout,
  };
};
