const prompt = require("prompt-sync")();

const factorial = (x) => {
    if (x < 1) {
        return 1
    } else {
        return x * factorial(x-1)
    }
}

let a = Number.parseInt(prompt("Enter a number"))

console.log("The factorial of",a,"is",factorial(a))
