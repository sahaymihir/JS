// const prompt = require("prompt-sync")();

// const marks = {
//     mihir: 90,
//     harsh: 99,
//     sushmita: 92,
//     suvm: 60
// } 

// for (let i = 0; i < 1; i++) {
//     console.log(marks);
// }

// const prompt = require("prompt-sync")();
// let n 
// do {
//     n = Number(prompt("Enter a number"));
//     console.log("Try again")
// } while (n != 5)

const prompt = require("prompt-sync")();

const mean = (x,y,z,q,w) => {
    return (x+y+z+q+w)/5
}

let a = Number(prompt("Enter a"))
let b = Number(prompt("Enter b"))
let c = Number(prompt("Enter c"))
let d = Number(prompt("Enter d"))
let e = Number(prompt("Enter e"))

console.log("The mean of 5 numbers is " + mean(a,b,c,d,e))
