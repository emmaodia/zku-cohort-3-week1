const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

let assigment = fs.readFileSync("./contracts/Multiplier3.sol", { encoding: 'utf-8' });
let result = assigment.replace(solidityRegex, 'pragma solidity ^0.8.0');
result = result.replace(verifierRegex, 'contract Multiplier3');

fs.writeFileSync("./contracts/Multiplier3.sol", result);