// npx hardhat test test/example.test.js

const { expect } = require("chai");

describe("Example test", function () {
  let exampleContract;

  beforeEach(async function () {
    [ owner, user1, user2 ] = await ethers.getSigners();

    const Example = await ethers.getContractFactory("Example");
    exampleContract = await Example.deploy(
      "Hello, world!", // greet text
      1 // counter
    );
    await exampleContract.deployed();
  });

  it("Should return the new greeting once it's changed", async function () {
    expect(await exampleContract.greet()).to.equal("Hello, world!");

    await exampleContract.connect(user1).setGreeting("Hello, degens!");

    expect(await exampleContract.greet()).to.equal("Hello, degens!");
  });

  it("Should return the new counter once it's changed", async function () {
    expect(await exampleContract.counter()).to.equal(1);

    await exampleContract.connect(user2).incrementCounter();

    expect(await exampleContract.counter()).to.equal(2);
  });

});