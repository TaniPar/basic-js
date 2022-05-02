const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  if(typeof str !== 'string'){
    str = str + '';
  }
  if(typeof options === 'undefined'){
    return str;
  }
  options['addition'] = typeof options['addition'] !== 'undefined' ?  options['addition'] : '';
  if(typeof options['addition'] !== 'string'){
    options['addition'] = options['addition'] + '';
   }
   options['repeatTimes'] = typeof options['repeatTimes'] !== 'undefined' ?  options['repeatTimes'] : 1;
   options['additionRepeatTimes'] = typeof options['additionRepeatTimes'] !== 'undefined' ?  options['additionRepeatTimes'] : 1;
   options['separator'] = typeof options['separator'] !== 'undefined' ?  options['separator'] : '+';
   options['additionSeparator'] = typeof options['additionSeparator'] !== 'undefined' ?  options['additionSeparator'] : '|';

  let result = '';
  let additionString = '';
  let n = options['additionRepeatTimes'];
  let m = options['repeatTimes'];
  if(n === 1){
    additionString = options['addition'];
  }
  if( n > 1){
    for(let i = 1; i < n; i++){
      additionString = additionString +options['addition'] + options['additionSeparator'];
    }
    additionString = additionString + options['addition'];
  }
  if(m ===1){
    result = result + str + additionString;
  }
  if(m > 1){
    for(let j = 1; j < m; j++){
      result = result + str + additionString + options['separator'];
  }
  result = result + str + additionString;
}
return result;
}

module.exports = {
  repeater
};
