const check = num => {
  let count = 0;
  
  while (Math.ceil(Math.log10(num + 1)) > 1) {
    let x = num;
    num = 1;
    while (x) {
      const digit = x % 10;
      num *= digit;
      x = (x - digit) / 10;
    }
    count++;
  }
  return count;
}
module.exports = check;