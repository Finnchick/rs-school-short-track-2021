/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultStr = '';
  let temp = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === temp) {
      count++;
    } if (str[i] !== temp) {
      if (count === 1) {
        resultStr += temp;
        count = 1;
        temp = str[i];
      } else {
        resultStr += count;
        resultStr += temp;
        count = 1;
        temp = str[i];
      }
    } if (i === str.length - 1) {
      if (count === 1) {
        resultStr += temp;
      } else {
        resultStr += count;
        resultStr += temp;
      }
    }
  }
  return resultStr;
}

module.exports = encodeLine;
