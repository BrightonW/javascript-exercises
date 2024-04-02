const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(args) {
  let sum = 0;
  args.forEach(item => {
    sum += Number(item)
  })
  return sum;
};

const multiply = function(args) {
  let product = 1;
  args.forEach(item => {
    product *= Number(item)
  })
  return product;

};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  if (num < 0) 
  return -1;

  else if (num == 0) 
  return 1;
  else {
    return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
