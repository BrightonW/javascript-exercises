const fibonacci = function(position) {
    let prev = 0, curr = 1, nextturn;
    if (position==0) return 0;
    if (position<0) return "OOPS"
    for (let i = 1; i<position; i++){
        console.log(curr)
        nextturn = prev + curr
        prev = curr 
        curr = nextturn
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
