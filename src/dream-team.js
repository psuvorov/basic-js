const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    return createDreamTeamInt(members);
};


/**
 *
 * @param {[]}members
 */
function createDreamTeamInt(members) {
    if (!Array.isArray(members))
        return false;
    
    let res = [];
    
    for (let x of members) {
        if (x && typeof(x) === "string") {
            x = x.trim();
            if (x[0].match(/[a-z]/i)) {
                res.push(x[0].toUpperCase());
            }
        }
        
    }
    
    res.sort();
    
    return res.join('');
}


// console.log(createDreamTeamInt([' Matt', ' Ann', ' Dmitry', 'Max', '   ']));
// console.log(createDreamTeamInt([[], [[[]]]]));
// console.log(createDreamTeamInt(['Olivia', 1111, 'Lily', 'Oscar', true, null]));