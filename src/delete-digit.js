const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];
  let str = n.toString();
  for (let x = 0; x < str.length; x++){
    let newStr = str.slice(0,x) + str.slice(x+1);
    let number = Number(newStr);
    arr.push(number);
}
const newArr = arr.sort(function(a,b){ 
  return b - a;
});
return newArr[0];
}

module.exports = {
  deleteDigit
};
