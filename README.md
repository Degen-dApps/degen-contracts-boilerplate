# Smart contracts boilerplate for the Degen L3 chain

This repository can serve as a starting point for your project. 

Or if you already have a repository, you can implement some parts of it, e.g. the contract verification scripts or tests.

## Quickstart

### Install dependencies

```bash
npm i
```

### Create .env file

Copy `.env.example` and create a `.env` file. Then enter your deployer private key in it (use a key that you use only for deployments and holds only very small amount of funds).

**Important:** The `.env` file is listed in `.gitignore` and it should never be added to the git repository (even if it's private on GitHub).

### Tests

There's an example test that you can run in the `test` folder.

Writing tests is a crucial part of smart contract development. Don't skip it.

### Deployment & Verification on the block explorer

In the `scripts` folder you can find an example of a deployment script. Deployment part is the same in both subfolders, the only difference is in how smart contracts are **verified** on the [block explorer](https://explorer.degen.tips/).

#### Deployment with automatic verification (`deploy-1` folder)

The script [exampleAutoVerification.deploy.js`](scripts/deploy-1/exampleAutoVerification.deploy.js) will automatically deploy and verify your smart contract.

Note that verification could fail if the lag between the contract deployment and when block explorer finds and stores its bytecode is too big. In that case the bash command for manual verification should print out in the terminal.

#### Deployment with manual verification (`deploy-2` folder)

In case you'd like to avoid potential errors with automatic verifications, you can opt-in for using manual verifications at all times, as set up in the [exampleManualVerification.deploy.js](scripts/deploy-2/exampleManualVerification.deploy.js) script.

#### Verification of an existing smart contract (`verify-existing` folder)

If you already have a deployed smart contract that has not been verified yet, you can use the [verification.js](scripts/verify-existing/verification.js) script along the parameters set in arguments.js.