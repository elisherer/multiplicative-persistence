const check = require('./check');

const find = (start, end, until) => {
  let mp, what = 1;
  for (let i = start; i < end ; i++) {
    mp = check(i);
    if (mp >= what) {
      console.log(i + ' has MP=' + mp);
      what++;
      if (what > until) return;
    }
  }
}

console.log('');
const t0 = process.hrtime();
find(0, 3e6, 8);
const t1 = process.hrtime(t0);
console.info(`\nExecution time: ${t1[0]}s ${t1[1] / 1000000}ms\n`);

//currently runs in ~400ms