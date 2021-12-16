import React, { createContext, useContext } from "react";
import { useWeb3 } from "./useWeb3";
import { ethers } from "ethers";
import { API as OnboardAPI } from "./types.onboard";
import { API as NotifyAPI } from "./types.notify";

interface Web3ContextProps {
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

export const Web3Context = createContext<{
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
}>({
  account: null,
  chainId: null,
  balance: null,
  library: null,
  onboard: null,
  notify: null,
  hasMounted: false,
  web3Start: () => new Promise<void>((resolve) => resolve()),
  web3Connect: () => new Promise<boolean | undefined>((resolve) => resolve(false)),
  web3Logout: () => new Promise<void>((resolve) => resolve()),
});

interface Web3ProviderProps {
  networkId: number;
  children?: any;
  dappId?: string;
  theme?: string;
}
export const Web3Provider = ({ networkId, dappId, theme, children }: Web3ProviderProps) => {
  const web3ContextValues = useWeb3(networkId, dappId, "dark");

  return (
    <Web3Context.Provider
      value={{
        ...web3ContextValues,
      }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => useContext(Web3Context);

export default Web3Provider;
