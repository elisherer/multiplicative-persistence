const check = big_num => {
  let count = 0;

  while (big_num.toString().length > 1) {
    let big_x = big_num;
    big_num = 1n;

    while (big_x && big_num) {
      const digit = big_x % 10n;
      big_num *= digit;
      big_x = (big_x - digit) / 10n;
    }

    count++;
  }
  return count;
};
module.exports = check;
