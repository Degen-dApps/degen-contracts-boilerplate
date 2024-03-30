// npx hardhat run scripts/deploy-1/exampleAutoVerification.deploy.js --network degen

const contractName = "Example";

const constructorArgs = [
  "Hello, world", // greeting
  1 // counter
];

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy contract
  const contract = await ethers.getContractFactory(contractName);
  const instance = await contract.deploy(
    // TODO:
    constructorArgs[0],
    constructorArgs[1]
  );
  await instance.deployed();
  
  console.log(contractName + " contract address:", instance.address);

  try {
    console.log("Wait a bit before starting the verification process...");
    sleep(2000);
    await hre.run("verify:verify", {
      address: instance.address,
      constructorArguments: constructorArgs,
    });
  } catch (error) {
    console.error(error);
    console.log("If automated verification did not succeed, try to verify the smart contract manually by running this command:");
    // TODO:
    console.log("npx hardhat verify --network " + network.name + " " + instance.address + ' "' + greeting + '" "' + counter + '"');
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });