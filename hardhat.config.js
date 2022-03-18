require('dotenv').config();
require('@nomiclabs/hardhat-ethers');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const {HTTP_KEY, PRIVATE_KEY} = process.env

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: HTTP_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 300000000
    }
  }

};
