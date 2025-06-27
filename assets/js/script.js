// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"

function stringReverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
}

let input_1 = 'javascript';
let result_1 = stringReverse(input_1);
console.log(`Q-1 (${input_1}): ` + result_1);

// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function palindromeCheck(str) {
  str = str.toLowerCase();
  let index = str.length - 1;
  for (let i = 0; i <= index; i++) {
    if (str[i] != str[index - i]) {
      return false;
    }
  }
  return true;
}

//Ex 1
let input_2 = 'Madam';
let result_2_1 = palindromeCheck(input_2);
console.log(`Q-2 (${input_2}): ` + result_2_1);

//Ex 2
input_2 = 'hello';
let result_2_2 = palindromeCheck(input_2);
console.log(`Q-2 (${input_2}): ` + result_2_2);

// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9

function max(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

let input_3 = [1, 5, 3, 9, 2];
let result_3 = max(input_3);
console.log(`Q-3 [${input_3}]: ` + result_3);

// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120

function factorial(num) {
  let mult = 1;
  for (let i = 1; i <= num; i++) {
    mult = mult * i;
  }
  return mult;
}

let input_4 = 5;
let result_4 = factorial(input_4);
console.log(`Q-4 [${input_4}]: ` + result_4);

// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)

function primeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// Ex 1
let input_5 = 7;
let result_5_1 = primeCheck(input_5);
console.log(`Q-5 [${input_5}]: ` + result_5_1);

// Ex 2
input_5 = 10;
let result_5_2 = primeCheck(input_5);
console.log(`Q-5 [${input_5}]: ` + result_5_2);

// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function noDuplicates(arr) {
  let d = [];
  for (let i = 0; i < arr.length; i++) {
    let isFound = false;
    for (let j = 0; j < d.length; j++) {
      if (arr[i] == d[j]) {
        isFound = true;
      }
    }
    if (!isFound) d[d.length] = arr[i];
  }
  return d;
}

input_6 = [1, 2, 2, 3, 4, 4, 5];
let result_6 = noDuplicates(input_6);
console.log(`Q-6 [${input_6}]: `, result_6);

// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55

function missingNumber(start, arr) {
  let j = 0;
  let i = start;
  while (i == arr[j]) {
    j++;
    i++;
  }
  return i;
}

let start = 1;
let input_7 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61,
  62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  100,
];
// let input_7 = [2,3,4,5,6,7,8,9,10];
let result_7 = missingNumber(start, input_7);
console.log(`Q-7 [${input_7}]: ` + result_7);

// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"

//method 1: manual method
function capitalizeFirstLetter(str) {
  let string = '';
  let s = '';

  for (let i = 0; i < str.length; i++) {
    letter = s == '' ? str[i].toUpperCase() : str[i].toLowerCase();
    s = s + letter;
    if (str[i] == ' ' || i == str.length - 1) {
      string = string + s;
      s = '';
    }
  }
  return string;
}

let input_8_1 = 'hello world from javascript';
let result_8_1 = capitalizeFirstLetter(input_8_1);
console.log(`Q-8 [${input_8_1}]: ` + result_8_1);

//method 2 : using string method;
function capitalizeFirstLetter_2(str) {
  let words = str.split(' ');
  let string = '';
  for (let i = 0; i < words.length; i++) {
    string =
      string +
      (i == 0 ? '' : ' ') +
      words[i].charAt(0).toUpperCase() +
      words[i].slice(1).toLowerCase();
  }
  return string;
}

let input_8_2 = 'helLo wORLd';
let result_8_2 = capitalizeFirstLetter_2(input_8_2);
console.log(`Q-8 [${input_8_2}]: ` + result_8_2);

// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false

function anagramCheck(str1, str2) {
  str2Arr = [...str2];

  if (str1.length != str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let found = false;
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1[i] === str2Arr[j]) {
        found = true;
        str2Arr[j] = ' ';
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}

let input_9_1_str1 = 'listen';
let input_9_1_str2 = 'silent';
let result_9_1 = anagramCheck(input_9_1_str1, input_9_1_str2);
console.log(`Q-9 ${input_9_1_str1}, ${input_9_1_str2}: ` + result_9_1);

let input_9_2_str1 = 'hello';
let input_9_2_str2 = 'world';
let result_9_2 = anagramCheck(input_9_2_str1, input_9_2_str2);
console.log(`Q-9 ${input_9_2_str1}, ${input_9_2_str2}: ` + result_9_2);

// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

function chunkArray(arr, sizeNum) {
  if (sizeNum <= 0) return 'Order error';

  // let i = 0;
  let j = 0;
  let q = [];

  // while (i < arr.length) {
  for (let i = 0; i < arr.length; i++) {
    if (!q[j]) q[j] = [];

    if (q[j].length === sizeNum) {
      j++;
      q[j] = [];
    }

    q[j][q[j].length] = arr[i];
    // i++;
  }

  return q;
}

let input_10_arr = [1, 2, 3, 4, 5, 6, 7];
let sizeNum = 3;
let result_10 = chunkArray(input_10_arr, sizeNum);
console.log(`Q-10 [${input_10_arr}], ${sizeNum}: `, result_10);

// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

function targetValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) continue;

    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i != j) return [arr[i], arr[j]];
    }
  }
}

let input_11_arr = [10, 5, 2, 7, 8, 3];
let target = 10;
let result_11 = targetValue(input_11_arr, target);
console.log(`Q-11 [${input_11_arr}], ${target}: `, result_11);

// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]

function rotateArray(arr, n) {
  if (arr.length === 0) return [];

  // بحال كان n يساوي طول المصفوفة أو من مضاعفاتها ستبقى عناصر المصفوفة في موضعها ولن يتغير شكل المصفوفة
  n = n % arr.length;
  if (n === 0) return arr;

  let rotatedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      rotatedArr[arr.length - n + i] = arr[i];
      continue;
    }
    rotatedArr[i - n] = arr[i];
  }

  return rotatedArr;
}

let input_12_arr = [1, 2, 3, 4, 5];
let n = 2;
let result_12 = rotateArray(input_12_arr, n);
console.log(`Q-12 [${input_12_arr}], ${n}: `, result_12);

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function IntersectionArray(arr1, arr2, duplicates = false) {
  if (!duplicates) {
    arr1 = noDuplicates(arr1);
    arr2 = noDuplicates(arr2);
  }
  // let copyArr2 = [...arr2];
  let result = [];
  let used = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !used[j]) {
        result[result.length] = arr1[i];
        used[j] = true;
        break;
      }
    }
  }
  return result;
}

let input_13_arr_1 = [1, 2, 3, 3, 4, 4, 4];
let input_13_arr_2 = [3, 4, 4, 5, 6];

let result_13_1 = IntersectionArray(input_13_arr_1, input_13_arr_2);
console.log(
  `Q-13 (set Intersection) [${input_13_arr_1}],[${input_13_arr_2}]: `,
  result_13_1
);

let result_13_2 = IntersectionArray(input_13_arr_1, input_13_arr_2, true);
console.log(
  `Q-13 (multiset Intersection) [${input_13_arr_1}],[${input_13_arr_2}]: `,
  result_13_2
);

// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

function countCharacter(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}

let input_14 = 'hello';
let result_14 = countCharacter(input_14);
console.log(`Q-14 ${input_14}: `, result_14);

// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      let flatArr = flattenArray(item);
      for (let j = 0; j < flatArr.length; j++) {
        result[result.length] = flatArr[j];
      }
    } else {
      result[result.length] = item;
    }
  }
  return result;
}

let input_15 = [1, [2, 3], [4, [5, 6, [7, [8, 9]]]]];
let result_15 = flattenArray(input_15);
console.log('Q-15', input_15, ' : ', result_15);

// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"

function longestWorld(str) {
  arr = str.split(' ');
  let word = '';

  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

let input_16 = 'The quick brown fox jumped over the lazy dog';
let result_16 = longestWorld(input_16);
console.log(`Q-16 ${input_16}: `, result_16);

// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'

// method 1
function mostFrequentElement(arr) {
  let items = countCharacter(arr);
  let count = 0;
  let mostFrequent;

  Object.keys(items).forEach((key) => {
    if (items[key] > count) {
      count = items[key];
      mostFrequent = key;
    }
  });
  return mostFrequent;
}

// method 2
function mostFrequentElement2(arr) {
  let maxCount = 0;
  let mostFrequent;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

let input_17_1 = [1, 2, 3, 2, 2, 4, 5, 2];
let result_17_1 = mostFrequentElement(input_17_1);
console.log(`Q-17 ${input_17_1}: `, result_17_1);

let input_17_2 = ['a', 'b', 'c', 'a', 'b', 'a'];
let result_17_2 = mostFrequentElement2(input_17_2);
console.log(`Q-17 ${input_17_2}: `, result_17_2);

// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)

function BubbleSortObject(arr) {
  let length = arr.length;

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - j - 1; i++) {
      if (arr[i].age > arr[i + 1].age) {
        let mediator = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = mediator;
      }
    }
  }
  return arr;
}

let input_18 = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 20 },
];
let result_18 = BubbleSortObject(input_18);
console.log('Q-18', input_18, ' : ', result_18);

// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

function nonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let isRepeating = false;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepeating = true;
        break;
      }
    }

    if (!isRepeating) {
      return str[i];
    }
  }
  return 'not found repeat';
}

let input_19_1 = 'swiss';
let result_19_1 = nonRepeatingChar(input_19_1);
console.log(`Q-19 ${input_19_1}: `, result_19_1);

let input_19_2 = 'aabbcc';
let result_19_2 = nonRepeatingChar(input_19_2);
console.log(`Q-19 ${input_19_2}: `, result_19_2);

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

function symmetricDifference(arr1, arr2) {
  let result = [];
  let copyArr = arr2;
  for (let i = 0; i < arr1.length; i++) {
    let check = false
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == copyArr[j]) {
        check = true
        continue;
      }
    }
    if(!check) result[result.length]=arr1[i];
  }
  for (let i = 0; i < copyArr.length; i++) {
    if(copyArr[i] != null){
      result[result.length]=copyArr[i];
    }
  }
  return result;
}

let input_20_1 = [1, 2, 3];
let input_20_2 = [3, 4, 5];
let result_20 = symmetricDifference(input_20_1, input_20_2);
console.log(`Q-20 [${input_20_1}] ,[${input_20_2}]: `, result_20);


