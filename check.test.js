const assert = require("assert");
const check = require("./check");
const checkBigInt = require("./check.bigint");
const { A003001, A046500 } = require("./sequences");

const testSequence = seq =>
  seq.forEach((num, index) => assert.equal(check(num), index)) ||
  console.log("PASS");

testSequence(A003001);
testSequence(A046500);

const testSequenceBigInt = seq =>
  seq.forEach((num, index) => assert.equal(checkBigInt(num), index)) ||
  console.log("PASS");

testSequenceBigInt(A003001.map(x => BigInt(x)));
testSequenceBigInt(A046500.map(x => BigInt(x)));

//console.log(check(smallest.pop()));
//console.log(check(55555555555555557777777777777));
