// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

var allNumbers = [12,2,3,4,5,6,7,8,9];
var evenNumbers = [];
for ( var i = 0; i <= allNumbers.length; i++) {
    if ( allNumbers[i] % 2 == 0) {
          evenNumbers.push(allNumbers[i]);
          console.log(evenNumbers);
    }}
