//Fibonacci
console.log("Fibonacci")
function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));
console.log();