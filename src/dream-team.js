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
function createDreamTeam(members) {
  let newArray = [];
  if (members instanceof Array) {
      newArray = members.map(function (member) {
          if (typeof member === 'string') {
            return member.trim().slice(member[0], 1).toLocaleUpperCase();
          }
      })
  return  newArray.sort((a, b) => a.localeCompare(b)).join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
