// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const multNegative = n < 0 ? -1 : 1
  const nToString = String(n * multNegative);
  const reverse = nToString.split('').reduce((merge, num)=> num + merge)
  return Number(reverse * multNegative);
}

module.exports = reverseInt;
