// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.24;

contract Example {
  string public greetText;
  uint256 public counter;

  // CONSTRUCTOR
  constructor(string memory _greetText, uint256 _counter) {
    greetText = _greetText;
    counter = _counter;
  }

  // READ
  function greet() public view returns (string memory) {
    return greetText;
  }

  function getCount() public view returns (uint256) {
    return counter;
  }

  // WRITE
  function setGreeting(string memory _greetText) public {
    greetText = _greetText;
  }

  function incrementCounter() public {
    counter++;
  }
}
