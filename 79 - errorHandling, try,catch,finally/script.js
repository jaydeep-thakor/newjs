let firstNumber = parseInt(prompt("Enter a first number = "));

let secondNumber = parseInt(prompt("Enter a second number = "));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new SyntaxError("Only numbers are allowed"); // to throw an error
}

let sum = firstNumber + secondNumber;

try{
console.log(sum*x)
}
catch{
    console.log("error cause x is not defined I think")
}











