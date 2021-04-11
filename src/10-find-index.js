/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function dichotomia(array, value, start, end, half) {
  let startN = start;
  let endN = end;
  let halfN = half;
  if (array[halfN] === value) {
    return halfN;
  } if (array[halfN] > value) {
    endN = halfN;
    halfN = Math.floor((end + start) / 2);
    return dichotomia(array, value, startN, endN, halfN);
  } if (array[halfN] < value) {
    startN = halfN;
    halfN = Math.ceil((end + start) / 2);
    return dichotomia(array, value, startN, endN, halfN);
  }
  return 'pizda';
}

function findIndex(array, value) {
  const startZ = 0;
  const endZ = array.length - 1;
  const halfZ = Math.ceil((array.length - 1) / 2);
  return dichotomia(array, value, startZ, endZ, halfZ);
}

module.exports = findIndex;
