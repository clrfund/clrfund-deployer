import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Web3Provider } from "./hooks/Web3Provider";
import { StateMachineProvider, createStore, useStateMachine, GlobalState } from "little-state-machine";
import { Deploy } from "./dapps/deployer";
import { Configure } from "./dapps/configure";
export enum Step {
  START = 0,
  LOADING = 1,
  CONTRACT_DEPLOY = 2,
  CONFIGURE = 3,
  RECIPIENT = 4,
}

createStore({
  data: {
    PoseidonT3: "No contract found.",
    PoseidonT6: "No contract found.",
    BatchUpdateStateTreeVerifier: "No contract found.",
    QuadVoteTallyVerifier: "No contract found.",
    Maci: "No contract found.",
    FundingRoundFactory: "No contract found.",
    RecipientRegistry: "No contract found.",
    UserRegistry: "No contract found.",
    loadingHeading: "New Deployment",
    loadingTitle: "Select Your Infrastructure",
    loading: false,
    loadingPercent: 1,
    loadingStatus: "Select QF Version",
    loadingDetail:
      "Do not close this tab. This website uses session storage to save your progress as we deploy, closing the tab will cause you to lose your progress",
    loadingButtonLeft: "Cancel",
    loadingButtonRight: "Continue with Default",
    loadingButtonRightOnClick: () => {},
    step: Step.START,
    contractsDeployed: "0",
    txHash: "",
    stateTreeDepth: 0,
    messageTreeDepth: 0,
    voteOptionTreeDepth: 0,
    tallyBatchSize: 0,
    messageBatchSize: 0,
    tokenAddress: "",
    coordinatorPubKey: "",
    coordinatorAddress: "",
    signupDuration: "",
    votingDuration: "",
    fundingSource: "",
    initialRecipients: "",
    initialContributors: "",
  },
});

export function updateState(
  state: GlobalState,
  payload: {
    PoseidonT3?: string;
    PoseidonT6?: string;
    BatchUpdateStateTreeVerifier?: string;
    QuadVoteTallyVerifier?: string;
    Maci?: string;
    FundingRoundFactory?: string;
    RecipientRegistry?: string;
    UserRegistry?: string;
    loadingHeading?: string;
    loadingTitle?: string;
    loading?: boolean;
    loadingPercent?: number;
    loadingStatus?: string;
    loadingDetail?: string;
    loadingButtonLeft?: string;
    loadingButtonRight?: string;
    loadingButtonRightOnClick?: any;
    step?: Step;
    contractsDeployed?: string;
    txHash?: string;
    stateTreeDepth?: number;
    messageTreeDepth?: number;
    voteOptionTreeDepth?: number;
    tallyBatchSize?: number;
    messageBatchSize?: number;
    tokenAddress?: string;
    coordinatorPubKey?: string;
    coordinatorAddress?: string;
    signupDuration?: string;
    votingDuration?: string;
    fundingSource?: string;
    initialRecipients?: string;
    initialContributors?: string;
  }
): GlobalState {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}

export function updateStep(
  state: GlobalState,
  payload: {
    step: Step;
  }
): GlobalState {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}

export const Dapp = () => {
  return (
    <StateMachineProvider>
      <Switch>
        <Route path="/dashboard/deploy/">
          <Deploy />
        </Route>
        <Route path="/dashboard/configure/">
          <Configure />
        </Route>
      </Switch>
    </StateMachineProvider>
  );
};
