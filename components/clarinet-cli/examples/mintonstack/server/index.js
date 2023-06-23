const express = require('express');
const app = express();
import { makeContractCall, BufferCV } from "@stacks/transactions";
import { StacksTestnet, StacksMainnet } from "@stacks/network";

const BigNum = require("bn.js");

// Endpoint that triggers stacks.js script
app.post('/api/v1/mint', (req, res) => {
  // Execute stacks.js script here
  // Make the necessary contract call
  
  const txOptions = {
    contractAddress: "ST1A56DME5HKKQY5PZVKB1TTQNE2AZ4HMHWHXRHW2",
    contractName: "mintonstack",
    functionName: "mint-to-bitcoin-address",
    functionArgs: [bufferCVFromString("foo")],
    senderKey: "b244296d5907de9864c0b0d51f98a13c52890be0404e83f273144cd5b9960eed01",
    // attempt to fetch this contracts interface and validate the provided functionArgs
    validateWithAbi: true,
    network: new StacksTestnet(), // for mainnet, use `StacksMainnet()`
  };

  const txn = async () => {
    const transaction =  await makeContractCall(txOptions);
  }
  txn();
  // Return a response to the HTTP request
  res.status(200).json({ message: 'Contract call executed successfully.' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
