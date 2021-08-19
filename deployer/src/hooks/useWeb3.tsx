import { useState, useEffect } from "react";
import { ethers } from "ethers";

import { useLocalStorage } from "./useLocalStorage";
import { initOnboard, initNotify } from "./blocknative.default";
import { API as OnboardAPI } from "./types.onboard";
import { API as NotifyAPI } from "./types.notify";

export const useWeb3 = (networkId: number, dappId?: string, theme: string = "light") => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [library, setLibrary] = useState<ethers.providers.Web3Provider | null>(null);

  const [onboard, setOnboard] = useState<OnboardAPI | null>(null);
  const [notify, setNotify] = useState<NotifyAPI | null>(null);
  const [wallet, setWallet] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  //NOTE: this allows us to start BNC async, then trigger side effects on hasMounted
  const web3Start = async () => {
    
    if (!hasMounted) {
      //NOTE: BNC has horrible web3 naming conventions, horrible.
      //DONE: Rename all the things, expose web3 provider, save wallet prefference to local store (only the same of the wallet no user data)
      setOnboard(
        initOnboard(
          {
            address: (address) => {
              if (address) {
                setAccount(address);
              } else {
                setAccount(null);
              }
            },
            network: setChainId,
            balance: setBalance,
            wallet: (_wallet) => {
              if (_wallet && _wallet.provider && _wallet.name) {
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
      
    }
  };
  // NOTE: Expose magic, checks if ready to transact otherwise prompts user
  const web3Connect = async () => {
    
    if (onboard == null) return;
    const ok = await onboard.walletSelect();
   
    if (library && account && chainId) {
      console.log("Web3 Set up complete");
      const ok = await onboard.walletCheck();
  
    }
    
  };

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
