
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(inputString){
    let reverseString = "";
    for(let i = inputString.length - 1; i>= 0; i--){
        reverseString += inputString[i];
    }
    return reverseString;
}

// console.log(reverseString('Hello World'))