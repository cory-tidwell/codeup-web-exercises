// 1. Return a string in reverse
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//     return //Something
// };
// 2. Return true if palindrome and false if not
//     ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };

function isPalindrome(input) {
    var reverseString = input.split("").reverse().join("");
    if ( reverseString === input ) return true;

    return false;
}
isPalindrome("racecar");