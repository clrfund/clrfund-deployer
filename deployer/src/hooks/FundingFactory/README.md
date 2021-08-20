# 🖇 FundingFactory Hooks

React hooks to send transactions for the FundingFactory contract using Ethers.js

`useAddFundingSource(contractAddress)`: Add matching funds source to the Set. must be called by owner. 

```js
{ validator, handleAddFundingSource, getReceipt, error } = useAddFundingSource("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_source, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleAddFundingSource(_source, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useCancelCurrentRound(contractAddress)`: Cancel current round, must be called by owner and current round must be finalzed

```js
{ validator, handleCancelCurrentRound, getReceipt, error } = useCancelCurrentRound("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator();
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleCancelCurrentRound();
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useCoordinatorQuit(contractAddress)`: Can only be called be coordinator

```js
{ validator, handleCoordinatorQuit, getReceipt, error } = useCoordinatorQuit("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator();
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleCoordinatorQuit();
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useDeployNewRound(contractAddress)`: Deploy new funding round. Requires current round to be finalzed or be the first round deployed

```js
{ validator, handleDeployNewRound, getReceipt, error } = useDeployNewRound("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator();
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleDeployNewRound();
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useRemoveFundingSource(contractAddress)`: Remove matching funds source from the Set. must be called by owner.

```js
{ validator, handleRemoveFundingSource, getReceipt, error } = useRemoveFundingSource("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_source, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleRemoveFundingSource(_source, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useSetCoordinator(contractAddress)`: Set coordinator's address and public key.Can only be called by owner.

```js
{ validator, handleSetCoordinator, getReceipt, error } = useSetCoordinator("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_coordinator, _coordinatorPubKey, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleSetCoordinator(_coordinator, _coordinatorPubKey, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useSetMaciParameters(contractAddress)`: proxy to set maciFactory parameters from funding factory contract. Must be called by owner.

```js
{ validator, handleSetMaciParameters, getReceipt, error } = useSetMaciParameters("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_stateTreeDepth, _messageTreeDepth, _voteOptionTreeDepth, _tallyBatchSize, _messageBatchSize, _batchUstVerifier, _qvtVerifier, _signUpDuration, _votingDuration, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleSetMaciParameters(_stateTreeDepth, _messageTreeDepth, _voteOptionTreeDepth, _tallyBatchSize, _messageBatchSize, _batchUstVerifier, _qvtVerifier, _signUpDuration, _votingDuration, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useSetRecipientRegistry(contractAddress)`: Set recipient registry. Must be called by owner.

```js
{ validator, handleSetRecipientRegistry, getReceipt, error } = useSetRecipientRegistry("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_recipientRegistry, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleSetRecipientRegistry(_recipientRegistry, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useSetToken(contractAddress)`: Set token in which contributions are accepted. Can only be called by owner.

```js
{ validator, handleSetToken, getReceipt, error } = useSetToken("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_token, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleSetToken(_token, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useSetUserRegistry(contractAddress)`: Set registry of verified users. Can only be called by owner.
```js
{ validator, handleSetUserRegistry, getReceipt, error } = useSetUserRegistry("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_userRegistry, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleSetUserRegistry(_userRegistry, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>

`useTransferMatchingFunds(contractAddress)`: Transfer funds from matching pool to current funding round and finalize it. Can only be called by number.

```js
{ validator, handleTransferMatchingFunds, getReceipt, error } = useTransferMatchingFunds("0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac")

const ok = await validator(_totalSpent, _totalSpentSalt, );
if (!ok) throw Error("Failed validation");

const [tx, txError] = await handleTransferMatchingFunds(_totalSpent, _totalSpentSalt, );
if (txError) throw Error(txError);

const [receipt, receiptError] = await getReceipt(tx.hash);
if (receiptError) throw Error(receiptError);
```
<br/>


