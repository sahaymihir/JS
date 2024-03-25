const prompt = require("prompt-sync")();

const average = (x,y) => {
    return (x+y)/2
}

let a = Number(prompt(("Enter a Number: ")))
let b = Number(prompt(("Enter another Number: ")))

console.log("The average is", average(a,b))
