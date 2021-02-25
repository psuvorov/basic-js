const CustomError = require("../extensions/custom-error");

let depthCalculator = class DepthCalculator {

    /**
     *
     * @param {[]} arr
     * @param acc
     */
    calculateDepth(arr, acc = 1) {
        let res = acc;

        for (let x of arr) {
            if (Array.isArray(x)) {
                let subDepth = this.calculateDepth(x, acc + 1);
                if (subDepth > res)
                    res = subDepth;
            }
        }
        
        return res;
    }
}

module.exports = depthCalculator;

// console.log(new depthCalculator().calculateDepth([1,2,3, [4, [1, []]]]));
// console.log(new depthCalculator().calculateDepth([[[[[]]]]]));