/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const string1 = s1.split('');
  const string2 = s2.split('');
  let result = 0;

  for (let i = string1.length; i >= 0; i--) {
    if (string2.indexOf(string1[i]) !== -1) {
      result++;
      string2.splice(string2.indexOf(string1[i]), 1);
      string1.splice(i, 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
