const prompt = require("prompt-sync")();


// switch (a) {
    //     case '1': 
    //     console.log("Lawda")
    //     break;
    
    //     case '22':
    //     console.log("Have my dick")
    //     break;
    
    //     default:
    //     console.log("Done")
    // }
    
const age = Number.parseInt(prompt("Enter a number"))
console.log ("You are", age >=18 ? "eligible to drive" : "not eligible to drive")
