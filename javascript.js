//1.  Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array ?

Anonymous Function:

let printOdds = function(arr) {
    return arr.filter(n => n % 2 !== 0);
};
console.log(printOdds([1, 2, 3, 4, 5]));

console.log("Odd Numbers:", oddNumbers);

IIFE:

(function(arr) {
    console.log(arr.filter(n => n % 2 !== 0));
})([1, 2, 3, 4, 5]);


//b.  Convert all the strings to title caps in a string array ?

Anonymous Function:

let toTitleCaps = function(arr) {
    return arr.map(str => str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
};
console.log(toTitleCaps(["hello", "world"]));

IIFE:

(function(arr) {
    console.log(arr.map(str => str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())));
})(["hello", "world"]);


//c.  Sum of all numbers in an array ?

Anonymous Function:

let sumArray = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
console.log(sumArray([1, 2, 3, 4]));

IIFE:

(function(arr) {
    console.log(arr.reduce((a, b) => a + b, 0));
})([1, 2, 3, 4]);


//d.  Return all the prime numbers in an array  ?

Anonymous Function:

let getPrimes = function(arr) {
    return arr.filter(n => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    });
};
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


IIFE:

(function(arr) {
    console.log(arr.filter(n => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    }));
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//e.  Return all the palindromes in an array

Anonymous Function:

let getPalindromes = function(arr) {
    return arr.filter(s => s === s.split('').reverse().join(''));
};
console.log(getPalindromes(["madam", "test", "nun", "hello"]));

IIFE:

(function(arr) {
    console.log(arr.filter(s => s === s.split('').reverse().join('')));
})(["madam", "test", "nun", "hello"]);


//f. Return median of two sorted arrays of the same size.

Anonymous Function :

let findMedianSortedArrays = function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};
console.log(findMedianSortedArrays([1, 3], [2, 4]));


IIFE:

(function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    console.log((merged[mid - 1] + merged[mid]) / 2);
})([1, 3], [2, 4]);


//g.  Remove duplicates from an array ?

Anonymous Function:

let removeDuplicates = function(arr) {
    return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

IIFE:

(function(arr) {
    console.log([...new Set(arr)]);
})([1, 2, 2, 3, 4, 4, 5]);


//h.  Rotate an array by k times

Anonymous Function:

let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));


IIFE:

(function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1, 2, 3, 4, 5], 2);


//2.  Do the below programs in arrow functions.

//a.  Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((num) => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});

//b. Convert all the strings to title caps in a string array

const stringArray = ["hello world", "javascript is awesome", "web development"];
const titleCaseArray = stringArray.map((str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
});
console.log("Title Case Strings:", titleCaseArray);

//c.  Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of Numbers:", sum);

//d.  Return all the prime numbers in an array

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = numbers.filter((num) => isPrime(num));
console.log("Prime Numbers:", primeNumbers);

//e. Return all the palindromes in an array

const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
};
const words = ["racecar", "level", "hello", "deified", "world", "madam"];
const palindromes = words.filter((str) => isPalindrome(str));
console.log("Palindromes:", palindromes);
