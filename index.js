
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(inputString){
    let reverseString = "";
    for(let i = inputString.length - 1; i>= 0; i--){
        reverseString += inputString[i];
    }
    return reverseString;
}

// console.log(reverseString('Hello World'))


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const inputArray = [2, -5, 10, -3, 7];

function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
        if(numbers[i] > 0){
            sum = sum + numbers[i]
        }
    }
    return sum;
  }

// console.log(sumOfPositiveNumbers(inputArray)); 


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const arr = [2, 3, 1, 3, 2, 3, 4, 5, 5, 5];

function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const element of arr) {
      if (!frequencyMap[element]) {
        frequencyMap[element] = 1;
      } else {
        frequencyMap[element]++;
      }
  
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }


// console.log(findMostFrequentElement(arr));