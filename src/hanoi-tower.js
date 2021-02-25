const CustomError = require("../extensions/custom-error");


module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return calculateHanoiInt(disksNumber, turnsSpeed);
};


/**
 * 
 * @param {number} disksNumber
 * @param {number} turnsSpeed
 */
function calculateHanoiInt(disksNumber, turnsSpeed) {
    let t = Math.pow(2, disksNumber) - 1 ;
    
    let turnsSpeedPerSec = turnsSpeed / 3600;
    
    return {
        turns: t,
        seconds: Math.floor(t / turnsSpeedPerSec)
    };
}

// console.log(calculateHanoiInt(3, 3600));