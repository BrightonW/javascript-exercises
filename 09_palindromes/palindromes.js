const palindromes = function (string) {
    string = string.replace(/[^\w\s]|_/g, '').toLowerCase().split(" ").join("")
    reverse = string.split("").reverse().join("")
    console.log(string, reverse)
    if (reverse == string) return true;
    return false;

};

// Do not edit below this line
module.exports = palindromes;
