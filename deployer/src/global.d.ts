import "little-state-machine";
declare module "little-state-machine" {
  interface GlobalState {
    data: {
      PoseidonT3: string;
      PoseidonT6: string;
      BatchUpdateStateTreeVerifier: string;
      QuadVoteTallyVerifier: string;
      Maci: string;
      FundingRoundFactory: string;
      RecipientRegistry: string;
      UserRegistry: string;
      loadingHeading: string;
      loadingTitle: string;
      loading: boolean;
      loadingPercent: number;
      loadingStatus: string;
      loadingDetail: string;
      loadingButtonLeft: string;
      loadingButtonRight: string;
      loadingButtonRightOnClick: any;
      step: Step;
      contractsDeployed: string;
      txHash: string;
      stateTreeDepth: number;
      messageTreeDepth: number;
      voteOptionTreeDepth: number;
      tallyBatchSize: number;
      messageBatchSize: number;
      tokenAddress: string;
      coordinatorPubKey: string;
      coordinatorAddress: string;
      signupDuration: string;
      votingDuration: string;
      fundingSource: string;
      initialRecipients: string;
      initialContributors: string;
    };
  }
}
declare enum Step {
  START = 0,
  LOADING = 1,
  CONTRACT_DEPLOY = 2,
  CONFIGURE = 3,
  RECIPIENT = 4,
}

declare global {
  interface Window {
      ethereum: Ethereumish;
  }
}

export interface Ethereumish {
  enable(): Promise<any>;
}