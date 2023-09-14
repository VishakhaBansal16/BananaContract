require("@nomicfoundation/hardhat-toolbox");
//require("solidity-coverage");
//require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://sepolia.infura.io/v3/d88f8ee2170d497d847bf35f1a78f1c7",
      accounts: ["a7383452b85338b9b9dc243654aea9aeae70599ae6987d0109e38ef86cc7b226"],
    },
  },

  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      sepolia: "3EU1BFA7RYB6JS9CCFC6J6UQGBJ5DJD674",
    },
    customChains: [],
  },
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  mocha: {
    timeout: 40000,
  },
};