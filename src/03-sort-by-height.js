/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a === b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
  return null;
}

function sortByHeight(arr) {
  const sortedArr = arr.filter((n) => n !== -1).sort(compare);
  const resultArr = [];
  let sortedIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) resultArr.push(arr[i]);
    else {
      resultArr.push(sortedArr[sortedIndex]);
      sortedIndex++;
    }
  }
  return resultArr;
}

module.exports = sortByHeight;
