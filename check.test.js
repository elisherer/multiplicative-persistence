const assert = require('assert');
const check = require('./check');
const { A003001, A046500 } = require('./sequences');

const testSequence = seq => seq.forEach((num, index) => assert.equal(check(num), index));

testSequence(A003001);
testSequence(A046500);

//console.log(check(smallest.pop()));
//console.log(check(55555555555555557777777777777));