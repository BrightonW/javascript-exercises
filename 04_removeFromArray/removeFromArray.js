const removeFromArray = function() {
    const args = Array.from(arguments);
    for (let i = 1; i<args.length; i++){
        if (!args[0].includes(args[i])) {
            continue;
        }
        for (let j = args[0].length - 1; j >= 0; j--) {
            if (args[0][j] === args[i]) {
                args[0].splice(j, 1);
            }
        }
    }
    return args[0]
};

// Do not edit below this line
module.exports = removeFromArray;
