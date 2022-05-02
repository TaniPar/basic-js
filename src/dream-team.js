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
  if(Array.isArray(members)){
    console.log(members);
    let arr = [];
  for(let i = 0; i< members.length; i++){
    if(typeof members[i] === "string"){
      let string = '';
     /* if(members[i][0] !== ' '){
        string = string + members[i][0]
      }*/
      for(let x = 0; x < members[i].length; x++){       
        if (members[i][x] !== ' '){
            string = string + members[i][x];
        }
      }
      arr.push(string[0]);
    }
  }
  if(arr.length === 0){
    return false;
  }
  arr.sort();
  let result = '';
  for(let j = 0; j< arr.length; j++){
    result = result + arr[j];
  }
  let res = result.toUpperCase().split('').sort().join('');
  
  return res;
 
  }
  return false;
}

module.exports = {
  createDreamTeam
};
