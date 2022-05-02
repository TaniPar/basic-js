const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
//let line = '';
const chainMaker = {
  line: '',
  getLength() {
    let length = 0;
    for(let i = 0; i< this.line.length; i++){
      if(this.line[i] === "("){
        length++;
      }
    }
    return length;
  },
  addLink(value) {
    if(typeof value === "undefined"){
      if(this.line.length === 0){
        this.line = this.line + '( )';
      } else {
        this.line = this.line + `~~'( )'`;
      }
    } else {
   if(this.line.length === 0){
    this.line = this.line + `( ${value} )`;
   } else {
    this. line = this.line + `~~( ${value} )`;
   }
  }
  },
  removeLink( position ) {
    if(typeof position !== "number" || !position.isInteger() || !line.includes(position + '')){
      throw new Error('You can\'t remove incorrect link!')
    }
    if(line.includes(position + '')){
      let a = position + '';
      if(this.line.length = a.length+4){
        this.line = ''}else{
          this.line.replace(`( ${a} )~~`, '');
      }
    }
  },
  reverseChain() {
    this.line =this.line.split('').reverse().join('');
  },
  finishChain() {
    let result = this.line;
    this.line = '';
   return result;
  }
};

module.exports = {
  chainMaker
};
