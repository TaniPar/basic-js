const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];

  for(let i = 0; i< matrix.length; i++){
    arr[i] = [];
    for(let j = 0; j< matrix[i].length; j++){
      arr[i][j] = 0;
    }
}
for(let x = 0; x< matrix.length; x++){
  for(let y = 0; y< matrix[x].length; y++){
    if( matrix[x][y] === true){
     // arr[x][y]++;

      if(x > 0){
        arr[(x - 1)][y]++;
      }
      if(x< (matrix.length -1)){
        arr[(x+1)][y]++;
      }
      if( y > 0){
        arr[x][(y-1)]++;
      }
      if(y < (matrix[x].length -1)){
        arr[x][y+1]++;
      }

      if(x > 0 && y>0){
        arr[x - 1][y -1]++;
      }
      if(x > 0 && y < (matrix[x].length -1)){
        arr[x-1][y+1]++;
      }
      if( y > 0 && x < matrix.length -1){
        arr[x +1][y-1]++;
      }
      if(y < (matrix[x].length -1) &&  x < matrix.length -1){
        arr[x + 1][y+1]++;
      }
    }
  }
}
return arr;
}

module.exports = {
  minesweeper
};

