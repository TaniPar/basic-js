const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let a = 1;
  let arr = [];
  for(let i = 0; i< names.length; i++){
    if(arr[i] === undefined){
      arr[i] = names[i];
    }
    for(let j = i+1; j< names.length; j++){
      if(names[i] === names[j]){
        if(arr[j] === undefined){
          arr[j] = `${names[i]}(${a})`;
          a++;
        }
      }
  }
  a = 1;
}
for(let x = 0; x< arr.length; x++){
  for(let y = 0; y< arr.length; y++){
    if(arr[x] === arr[y]){
      if(x< y){
        arr[y] = `${arr[y]}(${a})`;
        a++;
      }
      if(x>y){
        arr[x] = `${arr[x]}(${a})`;
        a++;
      }
}
  }
  a = 1;
}
return arr;
}

module.exports = {
  renameFiles
};
