// "use strict"
/**************************************** 
//By Kebede B.
//*Advanced JavaScript Algorithms - practice exercise
//with d/t way solutions
*****************************************/
/******************STEPS*********************** 

//?Steps to follow when solving algorithmic problem
1. understanding the problem statement
2. Solve it on Paper.
3. Write the pseudo code line by line
4. Translate pseudo code to JavaScript
5. Test/debug
6. Write useful comments

*********************************************/
/***************** Question 1 *************************
//? Given an array of numbers, write a function that prints in the console another array which contains all the even numbers in the original array, which also have even indexes only.
-Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
-Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

//? **** Pseudo Code *******
1. define a function that takes array parameter
2. check if the given is an array and each array elements are a numbers. if not return error message.
3. using for loop print another array which contains even number and have even indexes
4. return value
5. call / invoke function
*************************************************** */

console.log("Question-1");
//creating function
const evenNumberIndex = (arrays) => {
  //check a validation
  if (!Array.isArray(arrays) || arrays.length < 1) {
    return "Please provide a valid array  ";
  }
  let arrEven = [];
  //using for loop to get even element array with even index
  for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] !== "number") {
      return "Please provide number value";
    }
    //console.log(i);
    if (i % 2 === 0 && arrays[i] % 2 === 0) {
      //console.log(i);
      arrEven.push(i);
    }
    //console.log("loop number");
  }
  return arrEven;
};
console.log(evenNumberIndex([1, 2, 3, 6, 4, 8]));
console.log(evenNumberIndex([0, 1, 2, 4, 3]));

// using filter() method

console.log("opt-2");
//creating a function
const evenNumber = (arrays) => {
  //check validation
  if (!Array.isArray(arrays)) {
    return "Please provide array value ";
  }
  //filter even element  array with even index
  return arrays.filter((e, i) => e % 2 === 0 && i % 2 === 0);
  //return filtered array
  //return evenNumbers;
};
//call a function
console.log(evenNumber([1, 2, 3, 6, 4]));
console.log(evenNumber([0, 1, 2, 4, 3]));

/**************** Question 2 **************************
//?Create a function that takes a two-digit number as an parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function will print "Not ok"
-Test 1: reverseCompare(72) prints "ok" because 72 > 27
-reverseCompare(23) prints "Not ok", because 23 is not greater than 32.

//? **** Pseudo Code *******
1. define a function that takes a two-digit number as a parameter
2. check if the argument is a number and two-digit. if not return error message.
3. take the absolute value of the number (positive number)
4. using toString() method change the given numbers to string and store in some variable 
5. using for loop  reverse the string and save
6. convert the reversed string to number and compare with the given value, if it is greater than its reversed number return ok if not return not ok 
5. call / invoke function
 *********************************************************/

console.log("Question-2");
//create function
const reverseCompare = (numbers) => {
  //check validation
  if (typeof numbers !== "number") {
    return "Please provide number value";
  }
  //take positive value of a given
  num = Math.abs(numbers);
  //console.log(numb);
  //convert number to string
  let numStr = num.toString();
  //console.log(numbStr);
  //check validation if number is greater than two digit
  if (numStr.length > 2 || numStr.length < 2) {
    return "Please provide two digit  value";
  }
  //reverse string
  let reversed;
  for (let i = 0; i < numStr.length; i++) {
    reversed = numStr[1] + numStr[0];
  }
  //console.log(typeof reversed);
  //convert reversed string to number
  let reversedNum = parseFloat(reversed);
  //console.log(typeof number);
  if (num > reversedNum) {
    return "ok";
  } else {
    return "Not ok";
  }
};
// console.log(reverseCompare(-4));
// console.log(reverseCompare(72));
// console.log(reverseCompare(23));
// console.log(reverseCompare(-23));
// console.log(reverseCompare(234));

//or
console.log("opt-2");
const reverseComp = (numbers) => {
  if (typeof numbers !== "number") {
    return "Please provide number value";
  }
  let numb = numbers.toString().split("").reverse("").join("");
  if (numbers > numb) {
    return "ok";
  } else {
    return "Not ok";
  }
};
// console.log(reverseComp(-4));
// console.log(reverseComp(72));
// console.log(reverseComp(23));
// console.log(reverseComp(-23));
// console.log(reverseComp(234));

//or
console.log("opt-3");
function reverse(num) {
  let originNumber = num;
  let isNegative = num > 0 ? false : true;
  num = Math.abs(num);
  // console.log(num);
  //check the input is two digit number
  if (!(num >= 10 && num <= 99) || !Number.isInteger(num)) {
    return "Please Enter a two digit Number";
  }
  let reverseDigit = 0;
  //check the digit is greater than 0
  while (num > 0) {
    let digit = num % 10;
    reverseDigit = reverseDigit * 10 + digit;
    num = (num - digit) / 10;
    //console.log(num);
  }
  //console.log(num);
  if (isNegative) {
    // originNumber=-originNumber
    // console.log(num);
    reverseDigit = -reverseDigit;
    // console.log(reverseDigit);
  }
  //console.log(originNumber, reverseDigit);
  if (originNumber > reverseDigit) {
    return "Ok";
  } else return "Not Ok";
}
// console.log(reverse(-4));
// console.log(reverse(72));
// console.log(reverse(23));
// console.log(reverse(-23));
// console.log(reverse(234));

//or
console.log("opt-4");
function reverseCompar(num) {
  if (Math.abs(num) < 10 || Math.abs(num) > 99) {
    console.log("Not Ok!");
    return;
  }

  let isNegative = num < 0;
  let absNum = Math.abs(num);

  let unitsDigit = absNum % 10;
  let tensDigit = (absNum - unitsDigit) / 10;

  let reversedNumber = unitsDigit * 10 + tensDigit;
  if (isNegative) {
    reversedNumber = -reversedNumber;
  }
  if (num > reversedNumber) {
    console.log("Ok!");
  } else {
    console.log("Not Ok!");
  }
}
// reverseCompar(-4);
// reverseCompar(72);
// reverseCompar(23);
// reverseCompar(-23);
// reverseCompar(234);

/***************** Question 3 *************************
//? Write a function that takes a positive integer and returns the factorial of the number. Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is 4 * 3 * 2 * 1 = 24)
-Test 1: returnFactorial(5) outputs 120
-Test 2: returnFactorial(6) outputs 720
-Test 3: returnFactorial(0) outputs 1

//? **** Pseudo Code *******
1. define a function named returnFactorial that takes a param
2. check if the  argument is a number. if not return error message.
3. define variable result by assigning 1 value
4 use for loop (i = 0 , i< given argument, i++) 
5. inside for loop define general formula that calculate the factorial of any number using variable result defined above.
6. return the result outside the loop
7. call function
 ********************************************* */

// console.log("Question-3");
// const returnFactorial = (num) => {
//   if (typeof num !== "number" || num < 0) {
//     return "Please provide number value";
//   }
//   let result = 1;
//   for (let i = 0; i < num; i++) {
//     result = result * (num - i);
//   }
//   return result;
// };
// console.log(returnFactorial(5));
// console.log(returnFactorial(6));
// console.log(returnFactorial(0));

//or recursive function
/***************************************************
A recursive function is just a function which calls itself. Even if it is particularly useful to ensure that a recursive function returns "something" to its caller
**************************************************** */
// console.log("opt-2");
// function returnFact(num) {
//   if (num === 0) return 1;
//   return num * returnFact(num - 1);
// }
// console.log(returnFact(5));
// console.log(returnFact(6));
// console.log(returnFact(0));

/****************** Question 4 ************************
//? A Meera array is defined to be an array containing only numbers as its elements and for all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a Meera array”
-Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *2 is 10
-Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
-Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3*2 is -6

//? **** Pseudo Code *******
1. define a function named meeraArray that takes one array param
2. check if a given value is an array. if not return error message.
3. using array map() method create another array from the given array  multiplying by 2.
4 using nested for loop check for each element of the given array is equal to with each element of the new array.
-if equal return I am NOT a Meera array
-if not equal return I am  a Meera array
5. call function with array value argument.
 **************************************************** */

//console.log("Question-4");
const meeraArray = (array) => {
  if (!Array.isArray(array) || array.length < 2) {
    return "Please provide array value";
  }
  //const arrProduct = array.map((prod) => prod * 2);
  //console.log(array);
  //console.log(arrProduct);
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array.length; k++) {
      if (array[j] === array[k] * 2) {
        return "I am NOT a Meera array";
      }
      //console.log("loop number");
    }
  }
  return "I am a Meera array";
};
// console.log(meeraArray([3, 5, -2]));
// console.log(meeraArray([8, 3, 4])); //NOT
// console.log(meeraArray([10, 4, 0, 5])); //NOT
// console.log(meeraArray([7, 4, 9]));
// console.log(meeraArray([1, -6, 4, -3])); //NOT

//or

//console.log("opt-2");
const meeraArrays = (array) => {
  if (!Array.isArray(array) || array.length < 2) {
    return "Please provide array value";
  }
  //sorting array
  let arraySorted = array.sort((a, b) => a - b);

  let arrProduct = arraySorted.map((prod) => prod * 2);

  for (let i = 0; i < arraySorted.length; i++) {
    for (let j = 0; j < arrProduct.length; j++) {
      if (arraySorted[i] === arrProduct[j]) {
        return "I am NOT a Meera array";
      }
      //console.log("loop number");
    }
  }
  return "I am a Meera array";
};
//console.log(meeraArrays([3, 5, -2]));
//console.log(meeraArrays([8, 3, 4])); //NOT
//console.log(meeraArrays([10, 4, 0, 5])); //NOT
//console.log(meeraArrays([7, 4, 9]));
//console.log(meeraArrays([1, -6, 4, -3])); //NOT

//or
/**************using while loop***********************
//? step
1. Define a function takes array param
2. check if argument is array 
3. using while loop and include()method
    - Determine the double of each number in the array 
    - Check to the see if the array includes any of the doubles 
4.  if include array is not meera array 
    if not meera array
5. call function

************************************ */

//console.log("opt-2");
//Define array
function meeraArr(arr) {
  //check validation
  if (!Array.isArray(arr) || arr.length < 2) {
    return "Please provide array value";
  }
  //check double of each number in the array & compare
  let i = 0;
  while (i < arr.length) {
    if (arr.includes(arr[i] * 2)) {
      return "I am NOT a Meera array";
    }
    i++;
    console.log("loop number");
  }
  return "I am a Meera array";
}
// console.log(meeraArr([3, 5, -2]));
// console.log(meeraArr([8, 3, 4])); //NOT
// console.log(meeraArr([10, 4, 0, 5])); //NOT
// console.log(meeraArr([7, 4, 9]));
// console.log(meeraArr([1, -6, 4, -3])); //NOT

/********************************************************
the above function uses a while loop to iterate through each number in the array (array[i]), then a conditional (if statement) uses the .includes() method to check to see if that number’s double (array[i] * 2) is included in the array. If it finds the double, the function breaks out of the loops and returns I am NOT a Meera array. If not, the while loop continues to run through the entire array, and with each iteration of the while loop the .includes() method runs through the entire array. When no double is found, the loops conclude without returning anything, at which point the function returns I am a Meera array. 
//Reference
 https://medium.com/quick-code considering-optimization-and-time-complexity-with-js-algorithms-4c8915086518

 https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity

 https://www.linkedin.com/pulse/mastering-algorithm-efficiency-big-o-notation-explained-abeeb-raheem

 https://dev.to/wnxn/introduction-to-big-o-notation-and-time-complexity-in-javascript-2m5j

 https://www.theodinproject.com/lessons/javascript-time-complexity
 
 ***************************************************/

/**********************************************
console.log("opt-3");
function checkMeera(arr) {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] === elem * 2) {
        found = true;
        break;
      }
      console.log("loop number");
    }
    if (found) {
      console.log("I am NOT a Meera array");
      return;
    }
  }
  console.log("I am a Meera array");
}
checkMeera([3, 5, -2]);
checkMeera([8, 3, 4]); //NOT
checkMeera([10, 4, 0, 5]); //NOT
checkMeera([7, 4, 9]);
checkMeera([1, -6, 4, -3]); //NOT
*************************************************** */

/****************** Question 5 ************************
//?Define a Dual array to be an array where every value occurs exactly twice. For example, {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5 occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two times) Write a function named isDual that returns 1 if its array argument is a Dual array. Otherwise it returns 0

//? **** Pseudo Code *******
1. define a function named isDual that takes array param
2. check if an argument is an array. if not return error message.
3. using nested for loop check for each element of the given array is equal with  one to another only (dually only).
-if dually equal each other return 1
-if not return 0
4. call function with array value argument.

 ********************************************* */

console.log("Question -5 ");
//Create a function
let isDual = (array) => {
  //Check validation
  if (!Array.isArray(array)) {
    return "Please provide array value";
  } else if (array.length % 2 !== 0) {
    return 0;
  } else {
    //sort a given array
    let arraySort = array.sort((a, b) => a - b);
    //define empty array
    let arr1 = [];
    let arr2 = [];
    //using for loop separate array element with odd and even index and store them on empty arr1 and arr2
    for (let i = 0; i < arraySort.length; i++) {
      if (i % 2 === 0) {
        arr1.push(arraySort[i]);
      } else if (i % 2 !== 0) {
        arr2.push(arraySort[i]);
      }
      console.log("loop number");
    }
    //console.log(arr1);
    //console.log(arr2);
    //check if each element of arr1 and arr2 are equal
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] !== arr2[j]) {
        return 0;
      }
      console.log("loop number");
    }
    return 1;
  }
};
console.log(isDual([1, 2, 1, 3, 3, 2, 1, 1]));
//console.log(isDual([2, 5, 2, 5, 5]));
//console.log(isDual([3, 1, 1, 2, 2]));

//or

console.log("opt-2");
function isDuals(array) {
  if (!Array.isArray(array)) {
    return "Please provide array value";
  } else if (array.length % 2 !== 0) {
    return 0;
  } else {
    // sorting array
    let arraySort = array.sort((a, b) => a - b);
    // filtering even indexed array together and save as array
    let evenInArr = arraySort.filter((el, i) => i % 2 === 0);
    // filtering odd indexed array together and save as array
    let oddInArr = arraySort.filter((el, i) => i % 2 !== 0);
    //check if both array are double
    let i = 0;
    while (i < evenInArr.length) {
      if (
        evenInArr.includes(evenInArr[i]) ||
        oddInArr.includes(innerHeight[i])
      ) {
        return 0;
      }
      i++;
      //console.log("loop number");
    }
    //compare each element of two arrays
    let compare = evenInArr.map((el, i) => el == oddInArr[i]);
    console.log("loop number");
    console.log(compare);
    if (compare.every((n) => n === true)) {
      return 1;
    } else {
      return 0;
    }
  }
}
// console.log(isDuals([1, 2, 1, 3, 3, 2, 1, 1])); //1
// console.log(isDuals([2, 5, 2, 5, 5])); //0
// console.log(isDuals([3, 1, 1, 2, 2])); //0

//or
console.log("opt-3");
const isDualArray = (arr) => {
  if (!Array.isArray(arr)) {
    return "Please provide array value";
  } else if (arr.length % 2 !== 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      //console.log("loop number");
    }
    if (count !== 2) {
      return 0;
    }
  }
  return 1;
};
//isDualArray([1, 2, 1, 3, 3, 2]);
//console.log(isDualArray([1, 2, 1, 3, 3, 2]));
//console.log(isDualArray([2, 5, 2, 5, 5]));
//console.log(isDualArray([3, 4, 1, 5, 2]));

//or
console.log("opt-4");
function isDualA(arr) {
  let count = {};
  if (arr.length % 2 !== 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (count[item] == undefined) {
      count[item] = 1;
    } else {
      count[item]++;
    }
    console.log("loop number");
  }
  //console.log(count);
  for (let key in count) {
    if (count[key] !== 2) {
      return 0;
    }
    console.log("loop number");
  }
  return 1;
}
//console.log(isDualA([1, 2, 1, 3, 3, 2]));
//console.log(isDualA([2, 5, 2, 5, 5]));
//console.log(isDualA([3, 1, 1, 2, 2]));

/****************** Question 6 *************************
//?Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
-Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

//? **** Pseudo Code *******
1. define a function named digitalClock that takes one param
2. check if a given value is a number. if not return error message.
3. convert a given second to hour,  min & sec  in terms of general formula (hr= sec/3600) 
4 Using Math.floor() method to round down the value from the previous step.
5 Once the number of hours has been subtracted, convert to minute the number of remaining seconds.
6.Again after minute the remaining number will be second
7. If the calculated value of each (hr, min, sec) is less than 10 add "0" to the value 
8. if hrs > 24 change to "00"
9. return the values as Hr:min:sec 
10. call function 
 ********************************************* */

console.log("Question-6");
function digitalClock(sec) {
  if (isNaN(sec)) {
    return "please provide a number value";
  }
  //console.log(sec);
  // calculate hours
  let hours = Math.floor(sec / 3600);

  // calculate minutes
  let minutes = Math.floor((sec - hours * 3600) / 60);
  //  calculate seconds
  let seconds = sec - hours * 3600 - minutes * 60;
  // add 0 if value of each < 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  // Return as HH : MM : SS
  return `${hours}:${minutes}:${seconds}`;
}
//console.log(digitalClock(5025));
//console.log(digitalClock(61201));
//console.log(digitalClock(87000));
// There are many ways of rounding...
Math.ceil(5.5);
// Answer 6, rounds up.
Math.round(5.5);
// Answer 6, rounds to the closest whole number.
Math.floor(5.5);
// Answer 5, rounds down.

//or
/***************************************************
function digitalClock(seconds) {
  // Calculate hours by dividing the total seconds by 3600 (60*60), and take modulus 24 to get within 24-hour format
  const hours = Math.floor(seconds / 3600) % 24;

  // Calculate minutes by first finding the remainder of seconds after hours calculation and then dividing by 60
  const minutes = Math.floor((seconds % 3600) / 60);

  // Calculate the remaining seconds after hours and minutes are calculated
  const remainingSeconds = seconds % 60;
  // Format the time components to always have two digits using padStart
  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");
}

//or

function digitalClock(seconds) {
  // Calculate hours, minutes, and remaining seconds
  let hours = Math.floor(seconds / 3600) % 24; //Changing  to hours
  let minutes = Math.floor((seconds % 3600) / 60); // changing  to minutes
  let remainingSeconds = seconds % 60; // Changing to second
  // Format hours, minutes, and seconds to be two digits
  let formattedHours = String(hours).padStart(2, "0");
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedSeconds = String(remainingSeconds).padStart(2, "0");
  // Return the formatted time
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
// Example usage:
console.log(digitalClock(5025)); // Output: "01:23:45"
******************************************************* */
/******************************************************
//reference
//https://borstch.com/blog/understanding-and-using-the-map-filter-and-reduce-methods-in-javascript

//https://expertbeacon.com/higher-order-functions-how-to-use-filter-map-and-reduce-for-more-maintainable-code/

//https://www.codingbeautydev.com/blog/javascript-find-even-numbers-in-array

//https://builtin.com/software-engineering-perspectives/javascript-filter

//https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/
****************************************************** */
