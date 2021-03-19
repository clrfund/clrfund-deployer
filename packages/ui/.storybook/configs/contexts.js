import { Web3Provider } from "../../src/components/Web3Provider";

export const contexts = [
  {
    icon: "box",
    title: "Web3",
    components: [Web3Provider],
    params: [{ name: "networkId", props: { networkId: 1 } }],
    options: {
      deep: false,
      disabled: false,
      cancelable: false,
    },
  },
];
