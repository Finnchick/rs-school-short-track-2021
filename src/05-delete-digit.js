/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArray = n.toString().split('');
  let max = +nArray[0];
  let temp;
  for (let i = 0; i < nArray.length; i++) {
    temp = nArray.splice(i, 1);
    if (max < +nArray.join('')) {
      max = +nArray.join('');
    }
    nArray.splice(i, 0, temp);
  }
  return max;
}

module.exports = deleteDigit;
