// "use strict"
/**************************************** 
//*By Kebede B.
//* Additional Javascript algorithm practical problems with solution
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
console.log("Additional Practical Problems under here");
/***************************************************
//?What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! help write a function to detect what the word is, knowing the following roles:

- the wanted word is in lowercase
- the crowd of letters is all in uppercase
- note that the word will be spread out amongst the random letters, but their letters remain in the same order

Example
detectWord("UcUNFYGaFYFGtNUH") - "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") - "burglar"

//? ***** Pseudo Code ********
1. define a function named detectWord that takes an argument
2. For every letter check if uppercase (using for loop)
//!How do i check if letter is uppercase in js? google it
-if uppercase ignore
convert the letter to uppercase and compare it with the original (use the toUpperCase() method) if equal then it is upper case skip
-if not, collect the letter on some variable
3. at the end, return the collected letter

//?or shortly
-Define a function that takes an argument
-set empty string to store the collected lower cases later on
-loop through the argument string, to get each letter
  -check if each letter is lower case (small letter)
    -if yes, then add it to the storage
    -if no, move on to the next letter
-Once the loop is done, return the storage.

 **********************************************************/
console.log("Question-1");
function detectHiddenWord(givenString) {
  let hiddenWord = "";
  let singleLetter;
  for (let i = 0; i < givenString.length; i++) {
    singleLetter = givenString.charAt(i);
    //console.log("SingleLetter", singleLetter);
    if (singleLetter === singleLetter.toLowerCase()) {
      hiddenWord = hiddenWord + singleLetter;
      //console.log("OurStorage", hiddenWord);
    }
    //or
    // if (singleLetter !== singleLetter.toUpperCase()) {
    //   hiddenWord = hiddenWord + singleLetter;
    //   console.log("OurStorage", hiddenWord);
    // }

    //console.log(hiddenWord);
  }
  //console.log(singleLetter);
  return hiddenWord;
}
console.log(detectHiddenWord("UcUNFYGaFYFGtNUH"));
console.log(detectHiddenWord("bEEFGBuFBRrHgUHlNFYaYr"));
//or
console.log(detectHiddenWord("123UcUNFYGaFYFGtNUH"));
//detectWord("UcUNFYGaFYFGtNUH");
//detectWord("bEEFGBuFBRrHgUHlNFYaYr");

//method -2
console.log("method-2");
function detectHiddenWord1(givenString) {
  let stringArray = givenString.split("");
  //console.log("After converted to array", stringArray);
  let smallLetter = stringArray.filter(
    (singleLetter) => singleLetter !== singleLetter.toUpperCase()
  );
  //console.log("smallLetters in array", stringArray);
  smallLetter = smallLetter.join("");
  return smallLetter;
}
console.log(detectHiddenWord1("UcUNFYGaFYFGtNUH"));
console.log(detectHiddenWord1("bEEFGBuFBRrHgUHlNFYaYr"));
//or
console.log(detectHiddenWord1("123UcUNFYGaFYFGtNUH"));

/*************************************************
//Question- 2
Create a function that returns true if the first array can be nested inside the second. 
arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max

Examples
canNest([1, 2, 3,4], [0,6]) - true
canNest([3,1], [4, 0]) -true
canNest([9,9,8],[8,9]) - false
canNest([1, 2, 3, 4],[2, 3]) - false

//? ***** Pseudo Code ********
1. define a function  that takes two array param
2. check if both inputs are array
if not return please enter array value
use Array.isArray()
3. get the min value of array 1
arr1.sort()
arr[0] is the min

4. get the min value of array 2
arr2.sort()
arr2[0] is the min

5. compare the two and if min arr1 is less than or equal return false
arr1[0]<= arr2[0] return false
6. get the max value of array 1
arr1.sort()
arr1[arr1.length-1] is the max

7. get the max value of array 2
arr2.sort()
arr2[arr2.length-1] is the max

8. compare the two and if max arr1 is greater than or equal max arr 2 return false
arr1[arr1.length-1]>= arr2[arr2.length-1] return false

9. return true
**************************************************/
console.log("Question-2");
function canNest(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return "Please provide array values ";
  }

  let arr1Sorted = arr1.sort((x, y) => x - y);
  let arr2Sorted = arr2.sort((x, y) => x - y);
  let arr1min = arr1Sorted[0];
  let arr2min = arr2Sorted[0];
  let arr1max = arr1Sorted[arr1.length - 1];
  let arr2max = arr2Sorted[arr2.length - 1];
  if (arr1min < arr2min || arr1max > arr2max) {
    return false;
  } else {
    return true;
  }
}
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));

//method-2

console.log("method-2");
function canNestSecondMethod(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return "Please provide array values ";
  }

  let arr1min = Math.min(...arr1);
  //console.log("array 1 min >>>", arr1min);
  let arr2min = Math.min(...arr2);
  //console.log("array 2 min >>>", arr2min);
  let arr1max = Math.max(...arr1);
  //console.log("array 1 max >>>", arr1max);
  let arr2max = Math.max(...arr2);
  //console.log("array 2 max >>>", arr2max);
  if (arr1min < arr2min && arr1max > arr2max) {
    return false;
  } else {
    return true;
  }
}
console.log(canNestSecondMethod([1, 2, 3, 4], [0, 6]));
console.log(canNestSecondMethod([3, 1], [4, 0]));
console.log(canNestSecondMethod([9, 9, 8], [8, 9]));
console.log(canNestSecondMethod([1, 2, 3, 4], [2, 3]));

/*************************************************
Question-3 Magic Array
An array is defined to be a magic array if the sum of the primes in the array is equal to the first element of the array. if there are no primes in the array, the first element must be 0. So {21, 3, 9,11,4, 6} is a magic array because 3, 7, 11 are the primes in the array. {13, 4,4,4,4} is also a magic array because the sum of the prime is 13 which is also the first element. Other magic array are {10,5,5}, {0,6,8,20} and {3}. {8, 5,-5,5,3} is not a magic array because the sum of the prime is 5+5+3 =13. Note that -5 is not a prime because prime numbers are positive.

//steps
-variable to add prime (sum = 0)
-check if prime or not
if yes add on sum
-At the end
compare the sum the first value
if equal then it is magic array

//pseudo code

-define function isMagicArray(a)
-For every element
  for loop 
    check if prime or not
    

**************************************************/
function isMagicArray(a) {
  var sum = 0;
  for (i = 0; i < a.length; i++) {
    var num = a[i];
    if (num == 2) {
      sum = sum + num;
    }
    var isPrime = true;
    if (num > 2) {
      for (j = 2; j < num / 2 + 1; j++) {
        if (num % j != 0) {
          siPrime = false;
        }
      }
      if (isPrime) {
        sum = sum + num;
      }
    }
  }
  if (a[0] == sum) {
    return 1;
  } else {
    return 0;
  }
}
console.log(isMagicArray([21, 3, 9, 11, 4, 6]));
console.log(isMagicArray([13, 4, 4, 4, 4]));
console.log(isMagicArray([10, 5, 5]));
console.log(isMagicArray([0, 6, 8, 20]));
console.log(isMagicArray([3]));
console.log(isMagicArray([8, 5, -5, 5, 3]));

/*************************************************


**************************************************/
function sortNumbersInArrays2(numbers) {
  console.log(numbers, "Original Input Array");
  var j = true;
  while (j) {
    console.log(
      "Enters while loop condition - because J's value in the () is",
      j
    );
    j = false;
    console.log(
      "to stop the while loop we change J's value immediately to",
      j,
      "since the while loop has already started"
    );
    for (var i = 0; i < numbers.length - 1; i++) {
      console.log("current array order ---> ", numbers);
      console.log("for loop number -", i + 1);
      console.log("compares", numbers[i], "and", numbers[i + 1]);

      if (numbers[i] > numbers[i + 1]) {
        j = true;
        console.log(
          "Enters the if condition because",
          numbers[i],
          ">",
          numbers[i + 1]
        );
        console.log(
          "Since it entered the if condition we want to change J's value to",
          j,
          ",so it will enter the while loop again, once it finishes the for loop"
        );
        var tmp = numbers[i];
        console.log(
          numbers,
          "array, after storing",
          numbers[i],
          "on temp variable"
        );

        numbers[i] = numbers[i + 1];
        console.log(
          numbers,
          "array, after changing array index",
          i,
          "by",
          numbers[i + 1]
        );

        numbers[i + 1] = tmp;
        console.log(
          numbers,
          "array, after changing array index",
          i + 1,
          "by",
          tmp
        );
      }
    }
  }
  return numbers;
}

console.log(sortNumbersInArrays2([1, 16, 9]));

/*************************************************
  Question-5
Consider an array A with n of positive integers. An integer idx is called a POE (point of equilibrium) of A, if A[0] + A[1] +..+ A[idx-1] is equal to A[idx+1] + A[idx+2] + .. + A[n-1]. Write a function to return POE of an array, if it exists and -1 otherwise

The signature of the function is:  function(a)
Examples
-if input array is {1,8,3,7,10,2} - return 3
Reason: a[0] + a[1] + a[2] is equal to a[4] + a[5]
-if input array is {1,5,3,1,1,1,1,1,1} - return 2
Reason: a[0] + a[1] is equal to  a[3] + a[4] + a[5] + a[6] + a[7] + a[8]
-if input array is {1, 2, 3} - return -1
Reason: No POE

//? ***** Pseudo Code ********
- define a function   takes an array param
- define initial equilibrium e = 1
using a loop that sums every value before and after e
- Add up everthing on the left of e
- Add up everthing on the right of e
- compare the two
- if they are equal, then e is equilibrium return e
- if not, increase e by one
- Do the same until e is array.length-2
- if left and right are equal at some point, return e
- if e gets to array.length before left and right are equal return -1

**************************************************/
function equilibrium(array) {
  for (let e = 1; e < array.length - 1; e++) {
    let left = 0;
    for (let i = 0; i < e; i++) {
      left += array[i];
    }
    let right = 0;
    for (let j = e + 1; j < array.length; j++) {
      right += array[j];
    }
    if (left == right) {
      return e;
    }
    if (e == array.length - 2) {
      return -1;
    }
  }
}
console.log(equilibrium([1, 8, 3, 7, 10, 2]));
console.log(equilibrium([1, 2, 3]));

function Person(fNAme, lName, age, address) {
  this.fNAme = fNAme;
  this.lName = lName;
  this.age = age;
  this.address = address;
}
const dat = [
  new Person("Yhun", "Mulat", 26, "aa"),
  new Person("Abebe", "Alemu", 86, "Usa"),
  new Person("Aster", "Ayele", 22, "aa"),
];
dat;
function getStudents() {
  return dat;
}
let stu = getStudents();
const g = stu.map((x) => ({
  fNAme: x.fNAme,
  lName: x.lName,
}));
g;
const ages = stu.filter((ages) => ages.age > 30);
ages;

// reduce method
let allAges = stu.reduce(
  (accumulator, currentValue) => accumulator + currentValue.age,
  0
); // 0 is the initial value
allAges;
// sort method
const sortedByAges = stu.sort((a, b) => a.age - b.age);
sortedByAges;
// Add student object to array
const newstu = {
  tfNAme: "chala",
  lName: "abera",
  age: 45,
  address: "canada",
};
const newstudent = [...stu, newstu];
newstudent;
// Delete book object from array
const studentAfterDelete = newstudent.filter((stu) => stu.age !== 26);
studentAfterDelete;
// update student object in the array
const studntsAfterUpdate = studentAfterDelete.map((stu) =>
  stu.age === 22 ? { ...stu, age: 25 } : stu
);
studntsAfterUpdate;
