// 1. Make a function named isOdd(number)
//
// function isOdd(input){
//     if (input % 2 === 0) return false;
//     else return true;
// }
//
// // 2. Make a function isEven(number)
// function isEven(number) {
//     if (number % 2 === 0) return true;
//     else return false;
// }
// 3. Make a function named isMultipleOfFive(input)
// function isMultipleOfFive(input) {
//     if (input % 5 === 0) return true;
//     else return false;
// }
// 4. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(target, n) {
//     if (target % n === 0) return true;
//     else return false;
// }
// 5. Make a function named isVowel(letter)
function isVowel(letter){
    console.log(letter);
    if (!(/[aeiou]/i.test(letter))) return false;
    else return true;
    }
isVowel('A');

// ** the questions with an asterisk * are more challenging
//
// 6. Write a function called first(input) that returns the first character in the provided string.
//
// 7* Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input string with the second input string removed from it.
//
// const first = "hello world";
// const second = "hello";
// const removeAll = (first, second) => {
//     const newArr = first.split("").filter(el => {
//         return !second.includes(el);
//     });
//     return newArr.join("");
// };
// console.log(removeAll(first, second));

var result;
function stringMatch(arg1, arg2) {
    for (var word of arg2) {
        if (arg1.indexOf(word)) {
            result = arg1.replace(arg2, '');
        }
    } return result;
}
stringMatch("hello world", "world");

// -- If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the function.
//
// 8. Make a function named isSpace(letter) that returns if a character is a space character
//
// 9. Write a function named squareRoot(n) that returns the square root of the input
//
// 10* create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
var result = 0;
function whiteSpace(input) {

    while(/s+/) {
       console.log("This is number " + result)
        result = result + 1;
    } return result;
}
whiteSpace("    hi");
//
// 11. Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
//
// 12. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

13. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers