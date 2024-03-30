// Before running this script, make sure to enter data in the arguments.js file.
// npx hardhat run scripts/verify-existing/verification.js --network degen

const contractAddress = ""; // enter the address of the contract you want to verify

async function main() {
  console.log("Copy the line below and paste it in your terminal to verify the contract on block explorer:");
  console.log("");
  console.log("npx hardhat verify --network " + network.name + " --constructor-args scripts/verify-existing/arguments.js " + contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });