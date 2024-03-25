const prompt = require("prompt-sync")();

console.log("Program to find greater of three numbers")
let a = prompt("Enter a"), b = prompt("Enter b"), c = prompt("Enter c")
if (a > b) {
    if (a > c) {
        console.log("A is largest")
    }
}
else if (b > c) {
    console.log("B is largest")
} else {
    console.log("c is largest")
}