const prompt = require("prompt-sync")();

const sum = (x) => {
    if (x < 0) {
        return 0
    } else {
        return x + sum(x-1)
    }
}

let a = Number.parseInt(prompt("Enter a number:"))
console.log("The sum is", sum(a))
