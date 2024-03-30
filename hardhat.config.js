require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',

  networks: {
    hardhat: {
      gas: "auto", // gas limit
    },
    degen: { // DEGEN L3 Chain mainnet
      url: 'https://rpc.degen.tips',
      chainId: 666666666,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gas: "auto", // gas limit
      gasPrice: 1000000000, // 1 gwei
    },
  },

  /* Verification on the Degen block explorer */
  etherscan: {
    apiKey: { 
      degen: "somestring", // no API key is needed, but it cannot be an empty string either
    },

    customChains: [
      {
        network: "degen",
        chainId: 666666666,
        urls: {
          apiURL: "https://explorer.degen.tips/api",
          browserURL: "https://explorer.degen.tips"
        }
      }
    ]
  },

  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },

  solidity: {
    compilers: [
      {
        version: "0.8.24", // enter the version of solidity your contracts are using
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ],
    
  }
};
