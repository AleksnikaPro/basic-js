const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function getMatrixElementsSum(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if ((matrix[j][i] === 0)) {
        break;
      }
      counter += matrix[j][i];
    }
  }
  return counter;
}

module.exports = {
  createDreamTeam
};
