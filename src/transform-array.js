const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    return transformInt(arr);
};


/**
 * 
 * @param {[]} arr
 */
function transformInt(arr) {
    if (!Array.isArray(arr))
        throw new Error();

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        } else if (arr[i] === '--discard-prev') {
            if (arr[i - 2] !== '--discard-next') {
                res.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (i + 1 < arr.length) {
                res.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
                res.push(arr[i - 1]);
            }
        } else {
            res.push(arr[i]);
        }
    }

    return res;
}


// console.log(transformInt([1, 2, 3, 4, 5]));
// console.log(transformInt([1, 2, 3, '--discard-next', 4, 5]));
// console.log(transformInt([1, 2, 3, '--discard-prev', 4, 5]));
// console.log(transformInt([1, 2, 3, '--double-next', 4, 5]));
// console.log(transformInt([1, 2, 3, '--double-prev', 4, 5]));
// console.log(transformInt([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

