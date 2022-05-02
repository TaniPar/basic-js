const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight(arr) {
let result = [];
for(let i = 0; i< arr.length; i++){
  if(arr[i] === -1){
    result[i] = -1;
  }
}
let newArr = arr. sort((a, b) => a - b);
let SORT = [];
for(let j = 0; j < newArr.length; j++){
  if( newArr[j] !== -1){
    SORT.push(newArr[j]);
  }
}
let a = 0;
for(let x = 0; x < newArr.length; x++){
if(result[x] !== -1){
  result[x] = SORT[a];
  a++;
}
}
return result;
}


module.exports = {
  sortByHeight
};
