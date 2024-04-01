const reverseString = function(s) {
    newstr = ""
for (let i = s.length-1; i>-1; i--){
    newstr += s[i]
}
return newstr
};

// Do not edit below this line
module.exports = reverseString;