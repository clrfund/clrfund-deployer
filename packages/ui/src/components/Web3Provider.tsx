import React, { createContext, useContext } from "react";
import { useWeb3 } from "./hooks/useWeb3";
import { ethers } from "ethers";
import { API as OnboardAPI } from "./hooks/types.onboard";
import { API as NotifyAPI } from "./hooks/types.notify";

interface ContextProps {
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

export const Web3Context: React.Context<{
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
}> = createContext<ContextProps>({
  account: null,
  chainId: null,
  balance: null,
  library: null,
  onboard: null,
  notify: null,
  hasMounted: false,
  web3Start: () =>
    new Promise<void>((resolve) => {
      resolve(console.log("meh"));
    }),
  web3Connect: () =>
    new Promise<boolean | undefined>((resolve) => {
      resolve(false);
    }),
  web3Logout: () =>
    new Promise<void>((resolve) => {
      resolve();
    }),
});

// interface IWeb3ProviderProps {
//   networkId: number;
//   dappId?: string | undefined;
//   theme?: string | undefined;
// }

export const Web3Provider: ({
  networkId,
  dappId,
  theme,
  children,
}: {
  networkId: number;
  dappId?: string | undefined;
  theme?: string | undefined;
  children: any;
}) => React.ReactElement = ({ networkId, dappId, theme, children }) => {
  const web3Values = useWeb3(networkId, dappId, theme);

  return (
    <Web3Context.Provider
      value={{
        ...web3Values,
      }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context: () => {
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
} = () => useContext(Web3Context);
