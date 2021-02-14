// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const stgObj = {};
  str.split('').forEach(char => stgObj[char] = stgObj[char] + 1 || 1 );
  let maxChar = [1, ''];
  for (const char in stgObj) {
    if (stgObj[char] >= maxChar[0]) {
      maxChar[0] = stgObj[char];
      maxChar[1] = char;
    }  
  }
  return maxChar[1];
}

module.exports = maxChar;
