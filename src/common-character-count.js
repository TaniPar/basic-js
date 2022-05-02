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
  
/*let s1obj = {};
let news1 = '';
let s2obj = {};
let news2 = '';
*/
let result = 0;
let str1 = s1.split('').sort().join('');
let str2 = s2.split('').sort().join('');
for (let x = 0; x < str1.length; x++){
  for (let y = 0; y < str2.length; y++){
    if( str1[x] === str2[y]){
      result++;
      x++;
  }
}
}

return result;
}

module.exports = {
  getCommonCharacterCount
};
