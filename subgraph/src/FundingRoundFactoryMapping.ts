import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  CoordinatorChanged,
  FundingSourceAdded,
  FundingSourceRemoved,
  OwnershipTransferred,
  RoundFinalized,
  RoundStarted,
  TokenChanged,
  FundingRoundFactory as FundingRoundFactoryContract,
} from "../generated/FundingRoundFactory/FundingRoundFactory";

import { MACIFactory as MACIFactoryContract } from "../generated/FundingRoundFactory/MACIFactory";
import { FundingRound as FundingRoundContract } from "../generated/FundingRoundFactory/FundingRound";

import { OptimisticRecipientRegistry as RecipientRegistryContract } from "../generated/OptimisticRecipientRegistry/OptimisticRecipientRegistry";
import { BrightIdUserRegistry as UserRegistryContract } from "../generated/BrightIdUserRegistry/BrightIdUserRegistry";

import {
  FundingRound as FundingRoundTemplate,
  OptimisticRecipientRegistry as recipientRegistryTemplate,
  BrightIdUserRegistry as contributorRegistryTemplate,
} from "../generated/templates";
import { FundingRoundFactory, FundingRound, RecipientRegistry, ContributorRegistry } from "../generated/schema";

export function handleCoordinatorChanged(event: CoordinatorChanged): void {
  log.info("handleCoordinatorChanged", []);
}

export function handleFundingSourceAdded(event: FundingSourceAdded): void {
  log.info("handleFundingSourceAdded", []);
}

export function handleFundingSourceRemoved(event: FundingSourceRemoved): void {
  log.info("handleFundingSourceRemoved", []);
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  log.info("handleOwnershipTransferred", []);
} // let contract = Contract.bind(event.address)

export function handleRoundFinalized(event: RoundFinalized): void {
  log.info("handleRoundFinalized", []);
  let fundingRoundFactoryContract = FundingRoundFactoryContract.bind(event.address);
  let fundingRoundAddress = fundingRoundFactoryContract.getCurrentRound();

  let fundingRoundContract = FundingRoundContract.bind(fundingRoundAddress);

  let fundingRound = new FundingRound(fundingRoundAddress.toHexString());

  let totalSpent = fundingRoundContract.totalSpent();
  let totalVotes = fundingRoundContract.totalVotes();
  let tallyHash = fundingRoundContract.tallyHash();
  let isFinalized = fundingRoundContract.isFinalized();
  let contributorCount = fundingRoundContract.contributorCount();
  let matchingPoolSize = fundingRoundContract.matchingPoolSize();

  fundingRound.totalSpent = totalSpent;
  fundingRound.totalVotes = totalVotes;
  fundingRound.tallyHash = tallyHash;
  fundingRound.isFinalized = isFinalized;
  fundingRound.contributorCount = contributorCount;
  fundingRound.matchingPoolSize = matchingPoolSize;

  fundingRound.save();
}

export function handleRoundStarted(event: RoundStarted): void {
  log.info("handleRoundStarted!!!", []);
  let fundingRoundFactoryId = event.address.toHexString();
  let fundingRoundId = event.params._round.toHexString();

  let fundingRoundFactory = new FundingRoundFactory(fundingRoundFactoryId);

  FundingRoundTemplate.create(event.params._round);

  let fundingRoundFactoryContract = FundingRoundFactoryContract.bind(event.params._round);
  let fundingRoundAddress = fundingRoundFactoryContract.getCurrentRound();

  let fundingRoundContract = FundingRoundContract.bind(fundingRoundAddress);

  let fundingRound = new FundingRound(fundingRoundId);

  let nativeToken = fundingRoundContract.nativeToken();
  let coordinator = fundingRoundContract.coordinator();
  let maci = fundingRoundContract.maci();
  let voiceCreditFactor = fundingRoundContract.voiceCreditFactor();
  let contributorCount = fundingRoundContract.contributorCount();
  let matchingPoolSize = fundingRoundContract.matchingPoolSize();

  fundingRound.fundingRoundFactory = fundingRoundFactoryId;
  fundingRound.nativeToken = nativeToken;
  fundingRound.coordinator = coordinator;
  fundingRound.maci = maci;
  fundingRound.voiceCreditFactor = voiceCreditFactor;
  fundingRound.contributorCount = contributorCount;
  fundingRound.matchingPoolSize = matchingPoolSize;

  //Check if these registries already exist/are being tracked
  let recipientRegistryAddress = fundingRoundFactoryContract.recipientRegistry();
  let recipientRegistryId = recipientRegistryAddress.toHexString();
  let recipientRegistry = RecipientRegistry.load(recipientRegistryId);

  let contributorRegistryAddress = fundingRoundFactoryContract.userRegistry();
  let contributorRegistryId = contributorRegistryAddress.toHexString();
  let contributorRegistry = ContributorRegistry.load(recipientRegistryId);

  //NOTE: If the contracts aren't being tracked initialize them
  if (recipientRegistry == null) {
    recipientRegistryTemplate.create(recipientRegistryAddress);
    let recipientRegistryContract = RecipientRegistryContract.bind(recipientRegistryAddress);
    let baseDeposit = recipientRegistryContract.baseDeposit();
    let challengePeriodDuration = recipientRegistryContract.challengePeriodDuration();
    let controller = recipientRegistryContract.controller();
    let maxRecipients = recipientRegistryContract.maxRecipients();
    let owner = recipientRegistryContract.owner();

    let recipientRegistry = new RecipientRegistry(recipientRegistryId);

    recipientRegistry.baseDeposit = baseDeposit;
    recipientRegistry.challengePeriodDuration = challengePeriodDuration;
    recipientRegistry.controller = controller;
    recipientRegistry.maxRecipients = maxRecipients;
    recipientRegistry.owner = owner;
    recipientRegistry.fundingRoundFactory = fundingRoundFactoryId;
    recipientRegistry.save();
  }

  if (contributorRegistry == null) {
    contributorRegistryTemplate.create(contributorRegistryAddress);

    let contributorRegistryContract = UserRegistryContract.bind(contributorRegistryAddress);

    let context = contributorRegistryContract.context();
    let owner = contributorRegistryContract.owner();
    let verifier = contributorRegistryContract.verifier();
    let contributorRegistry = new ContributorRegistry(contributorRegistryId);

    contributorRegistry.context = context;
    contributorRegistry.owner = owner;
    contributorRegistry.verifier = verifier;
    contributorRegistry.fundingRoundFactory = fundingRoundFactoryId;
    contributorRegistry.save();
  }

  let maciFactoryAddress = fundingRoundFactoryContract.maciFactory();
  let maciFactoryContract = MACIFactoryContract.bind(maciFactoryAddress);
  let batchUstVerifier = maciFactoryContract.batchUstVerifier();
  let qvtVerifier = maciFactoryContract.qvtVerifier();
  let votingDuration = maciFactoryContract.votingDuration();
  let signUpDuration = maciFactoryContract.signUpDuration();

  let tallyBatchSize = maciFactoryContract.batchSizes().value0;
  let messageBatchSize = maciFactoryContract.batchSizes().value1;
  let stateTreeDepth = maciFactoryContract.treeDepths().value0;
  let messageTreeDepth = maciFactoryContract.treeDepths().value1;
  let voteOptionTreeDepth = maciFactoryContract.treeDepths().value2;
  let maxUsers = maciFactoryContract.maxValues().value0;
  let maxMessages = maciFactoryContract.maxValues().value1;
  let maxVoteOptions = maciFactoryContract.maxValues().value2;

  fundingRoundFactory.contributorRegistry = contributorRegistryId;
  fundingRoundFactory.recipientRegistry = recipientRegistryId;
  fundingRoundFactory.contributorRegistryAddress = contributorRegistryAddress;
  fundingRoundFactory.recipientRegistryAddress = recipientRegistryAddress;
  fundingRoundFactory.maciFactory = maciFactoryAddress;
  fundingRoundFactory.nativeToken = nativeToken;
  fundingRoundFactory.coordinator = coordinator;
  fundingRoundFactory.batchUstVerifier = batchUstVerifier;
  fundingRoundFactory.qvtVerifier = qvtVerifier;
  fundingRoundFactory.votingDuration = votingDuration;
  fundingRoundFactory.signUpDuration = signUpDuration;
  fundingRoundFactory.tallyBatchSize = BigInt.fromI32(tallyBatchSize);
  fundingRoundFactory.messageBatchSize = BigInt.fromI32(messageBatchSize);
  fundingRoundFactory.stateTreeDepth = BigInt.fromI32(stateTreeDepth);
  fundingRoundFactory.messageTreeDepth = BigInt.fromI32(messageTreeDepth);
  fundingRoundFactory.voteOptionTreeDepth = BigInt.fromI32(voteOptionTreeDepth);
  fundingRoundFactory.maxUsers = maxUsers;
  fundingRoundFactory.maxMessages = maxMessages;
  fundingRoundFactory.maxVoteOptions = maxVoteOptions;
  fundingRoundFactory.currentRound = fundingRoundId;

  fundingRoundFactory.save();

  //NOTE: Set the registries for the round
  fundingRound.contributorRegistry = contributorRegistryId;
  fundingRound.recipientRegistry = recipientRegistryId;
  fundingRound.contributorRegistryAddress = contributorRegistryAddress;
  fundingRound.recipientRegistryAddress = recipientRegistryAddress;
  fundingRound.startTime = event.block.timestamp;
  fundingRound.signUpDeadline = event.block.timestamp.plus(signUpDuration);
  fundingRound.votingDeadline = event.block.timestamp.plus(signUpDuration).plus(votingDuration);
  fundingRound.save();
}

export function handleTokenChanged(event: TokenChanged): void {
  log.info("handleTokenChanged", []);
}
