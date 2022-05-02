const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

/*  constructor(array) {
   // if (!Array.isArray(array)) throw new Error("неверный ввод");
    this.array = array;
    this.depth = 1;
}
calculateDepth(array) {
    if (depth > this.depth) this.depth = depth;
    for (let el of array) {
        if (Array.isArray(el)) {
            this.calculateDepth(el, depth + 1);
        }
    }
    return this.depth;
}*/

module.exports = {
  DepthCalculator
};
