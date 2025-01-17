console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName(name) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Johnny'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(5, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}
console.log(multiplyThree(1, 2, 3));


//wanted to do two different things between q3 and q4. Q3 function uses firstNumber and secondNumber
//wanted to do one without anything in the fuction

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast(array) {
  return array [array.length - 1];
}
console.log(getLast([]));
console.log(getLast(['fish', 'cat', 'bird', 'dog']));
console.log(getLast([1, 2, 3, 4, 5, 6]));

//Double check on it you need to write a line for return 'undefined'


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array){
  for (let i = 0; i < array.length; i++)
    if (value === array[i]) {
      return true;
    }
  return false;
}

console.log(find(1, [1, 2, 3]));
console.log(find(0, [10, 11, 99]));
console.log(find(1, [3, 2, 1]));
//The problem is using getLast([1, 2, 3, 4, 5]) figure out why and correct it. (Used a differnt things inside the loop)
//Why not use else or a different loop? Kind of hit a brick wall for a while on this question. Kind of just brute forced it to work.
//It works but not sure if it is still correct. Do more research on functions with loops inside of it.

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === 'a') {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(item) {
  let sum = 0
  for (let i = 0; i < item.length; i++) {
    sum += item[i];
  }
  // TODO: loop to add items
  return sum;
}
console.log(sumAll([1, 2, 3, 4, 5]));

//Look at week 3 part 3 #9 for referencing how to do this
//Tested out a while loop and a for loop. Both work. Going to put the while loop in the notes for later reference

//function sumAll(item) {
  //let sum = 0
  //let i = 0
  //while (i < item.length) {
    //sum += item[i++];
  //}
  // TODO: loop to add items
  //return sum;
//}
//console.log(sumAll([1, 2, 3, 4, 5,]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//changed the function and array to make it easier to type out then what I had before.

//breaking down the question logically
//- get input array
//- Is first number positive? if yes, store for later
//- Is second number positive? If yes, store for later [...]
//- Is last number positive? If yes, store for later
//- Return stored positive numbers

function positiveArray(numbers) {
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > 0)
      positiveNumbers.push(number)
  }
  return positiveNumbers;
}

console.log(positiveArray([1, 2, 3, -10]));
console.log(positiveArray([-2, -3, -10, -19, 2]));
console.log(positiveArray([-1, -2, -3, -4]));

//This question was very difficult for me for a while till I tried using number

//Found this online from fullstack website and it worked perfectly but I didn't feel comfortable using it as its using things
//I haven't used before.

//function positiveNumber(allPositive) {
  //return allPositive.filter(function(value) {
    //return value > 0;
  //});
//}

//Look at assingment 4 part 3 for reference.
//Something with adding numbers to the let positive []. Similar to global var basket that was empty in wk 4 part 3

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Creat a function that takes a string and returns the number (count) of vowels contauned within it.

function countVowels(string) {
  let vowelsNumber = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of string) {
    if (vowels.includes(char)) {
      vowelsNumber++
    }
  }
  return vowelsNumber;
}

console.log(countVowels('hello'));
