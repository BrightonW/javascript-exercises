const repeatString = function(word, reps) {
    let m = ""
    if (reps<0) return "ERROR"
    for (let i = 0; i <reps; i++){
        m = m.concat(word)
    }
    return m
};

// Do not edit below this line
module.exports = repeatString;
