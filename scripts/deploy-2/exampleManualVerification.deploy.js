// npx hardhat run scripts/deploy-2/exampleManualVerification.deploy.js --network degen

const contractName = "Example";

const greeting = "Hello, world"; 
const counter = 1; 

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy contract
  const contract = await ethers.getContractFactory(contractName);
  const instance = await contract.deploy(
    greeting,
    counter
  );
  
  console.log(contractName + " contract address:", instance.address);

  console.log("Wait a minute and then run this command to verify the contract on block explorer:");
  console.log("npx hardhat verify --network " + network.name + " " + instance.address + ' "' + greeting + '" "' + counter + '"');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });