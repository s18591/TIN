
//Recursive function using function expression
console.log("Factorial");
var  factorialize = function(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
console.log(factorialize(5));
console.log();

//Iterative function using function declaration
function fac(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
console.log(fac(5));
console.log();
