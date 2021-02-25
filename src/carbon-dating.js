const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    return dateSampleInt(sampleActivity);
};



function dateSampleInt(sampleActivity) {
    if (typeof (sampleActivity) !== "string")
        return false;

    sampleActivity = parseFloat(sampleActivity);
    if (isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity >= 15.1)
        return false;

    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
}

