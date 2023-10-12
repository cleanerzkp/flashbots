# FakeNFT with Flashbots Integration

## Overview
This repository contains a Solidity smart contract for a simple ERC721 token (FakeNFT), along with a JavaScript script to interact with it using ethers.js and Flashbots.

## Features
- ERC721 compliant FakeNFT contract
- Script to interact with the deployed contract
- Flashbots integration to bundle transactions

## Prerequisites
- Node.js and npm
- Hardhat
- A Web3 provider API key QuickNode


## Installation
1. Clone the repository:
    ```
    git clone git@github.com:cleanerzkp/flashbots.git
    ```
2. Install the dependencies:
    ```
    npm install
    ```

## Usage
1. Deploy the FakeNFT contract & run Flashbots script:
    ```
    npx hardhat run scripts/flashbots.js --network
    ```


## Contributing
Feel free to submit pull requests or report issues.

## License
This project is licensed under the MIT License.
