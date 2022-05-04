// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

var myInput = 931

function makeArray(num){
   return String(num).split("");
}
makeArray(myInput);