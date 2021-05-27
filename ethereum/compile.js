const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");

fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Faucet.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// Compile contract

const input = {
  language: "Solidity",
  sources: {
    "Faucet.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
fs.ensureDirSync(buildPath);

const contracts = tempFile.contracts["Faucet.sol"];

for (let contract in contracts) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract + ".json"),
    contracts[contract]
  );
}
