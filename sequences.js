// Since there exists no number k <= 10^200 with multiplicative persistence 12, 
// a(n) = (10^(n-15)-1)/9*10^15 + 277777788888899 for 15 <= n <= 200. - A.H.M. Smeets, Sep 18 2018

// A003001		Smallest number of multiplicative persistence n.
exports.A003001 = [
  0, 10, 25, 39, 77, 679, 6788, 68889, 2677889, 26888999, 3778888999, 277777788888899
];
// A046500		Smallest prime with multiplicative persistence n.
exports.A046500 = [
  2, 11, 29, 47, 277, 769, 8867, 186889, 2678789, 26899889, 3778888999, 277777788888989
]
/*
> 3*(7**10)*(8**6)
222147575021568
*/