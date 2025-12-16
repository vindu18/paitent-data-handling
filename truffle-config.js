const path = require("path");

module.exports = {
  // custom directories for contracts/migrations/build
  contracts_directory: path.join(__dirname, 'src/contracts'),
  migrations_directory: path.join(__dirname, 'src/migrations'),
  contracts_build_directory: path.join(__dirname, 'src/build/contracts'),

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777,
    },
  },

  mocha: {},

  compilers: {
    solc: {
      version: "0.8.19",
    }
  },
};
