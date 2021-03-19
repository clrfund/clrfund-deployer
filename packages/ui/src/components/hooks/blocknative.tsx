import notify from "bnc-notify";
import onboard from "bnc-onboard";

export const initOnboard = (subscriptions, networkId = 1, dappId = "", wallets = [{ walletName: "metamask" }]) => {
  return onboard({
    dappId,
    networkId,
    subscriptions,
    walletSelect: {
      wallets,
    },
    walletCheck: [
      { checkName: "connect" },
      { checkName: "accounts" },
      { checkName: "network" },
      { checkName: "balance", minimumBalance: "100000" },
      { checkName: "derivationPath" },
    ],
  });
};
export const initNotify = (networkId = 1, dappId = "") => {
  return notify({
    dappId,
    networkId,
  });
};
