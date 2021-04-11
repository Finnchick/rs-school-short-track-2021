/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    let tempSum = 0;
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i][j] === 0) {
        tempSum = 0;
      } else {
        tempSum += matrix[i][j];
      }
    }
    result += tempSum;
  }
  return result;
}

module.exports = getMatrixElementsSum;
