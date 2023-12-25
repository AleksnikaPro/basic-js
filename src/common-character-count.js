const { NotImplementedError } = require('../extensions/index.js');

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
  const firstSplitted = s1.split('');
  const secondSplitted = s2.split('');
  let counter = 0;

  firstSplitted.forEach((element) => {
    if (secondSplitted.includes(element)) {
      counter++;
      secondSplitted.splice(secondSplitted.indexOf(element), 1);
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
