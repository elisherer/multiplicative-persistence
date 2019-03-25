const check = require('./check');

//const start = 1e1, end = 1e2, what = 4;
//const start = 1e2, end = 1e3, what = 5;
//const start = 1e3, end = 1e4, what = 6;
//const start = 1e4, end = 1e5, what = 7;
const start = 1e5, end = 3e6, what = 8;

let mp;
for (let i = start; i < end ; i++) {
  mp = check(i);
  if (mp >= what) {
    console.log(i + ' has MP=' + mp);
  }
}