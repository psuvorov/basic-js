const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    return countCatsInt(arr);
};

/**
 * 
 * @param {[][]} arr
 */
function countCatsInt(arr) {
    let res = 0;
    
    for (let chunk of arr) {
        for (let x of chunk) {
            if (x === "^^")
                res++;
        }
    }
    
    return res;
}