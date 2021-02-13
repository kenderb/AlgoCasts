// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newArray = [];
  for (const iterator of str) newArray.unshift(iterator);
  return newArray.join('');
}

module.exports = reverse;
