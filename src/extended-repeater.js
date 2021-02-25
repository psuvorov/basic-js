const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    return repeaterInt(str, options);
};

/**
 * 
 * @param {any} str
 * @param {{
 *     repeatTimes: number,
 *     separator: string,
 *     addition: string,
 *     additionRepeatTimes: number,
 *     additionSeparator: string
 * }} options
 */
function repeaterInt(str, options) {
    if (!options.separator)
        options.separator = '+';
    if (!options.additionSeparator)
        options.additionSeparator = '|';
    
    let res = "";
    if (!options.repeatTimes)
        res = str;
    if (!options.additionRepeatTimes && options.addition)
        res += options.addition;
    
    for (let i = 1; i <= options.repeatTimes; i++) {
        res += str;
        
        for (let j = 1; j <= options.additionRepeatTimes; j++) {
            res += options.addition;
            res += options.additionSeparator;
        }
        if (options.additionRepeatTimes)
            res = res.substring(0, res.lastIndexOf(options.additionSeparator));
        
        res += options.separator;
    }
    
    if (options.repeatTimes)
        return res.substring(0, res.lastIndexOf(options.separator));
    else
        return res;
}

// let res = repeaterInt("STRING", { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
// let res = repeaterInt("STRING", { repeatTimes: 0, separator: '**', addition: 'PLUS', additionRepeatTimes: 0, additionSeparator: '00' });

// console.log(res);
//"STRING PLUS00 PLUS00 PLUS**   STRING PLUS00 PLUS00 PLUS**   STRING PLUS00 PLUS00 PLUS";