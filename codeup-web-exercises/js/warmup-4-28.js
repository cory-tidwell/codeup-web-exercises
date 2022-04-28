// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

var arrInput = [1,2,3,4,5,6,7,8,9,10];
var numInput = 3;
var newArr = [];

function sortArr(arr, num){
    for(i = 3; i < arr.length; i+=num) {
       newArr.push(i);
    } return newArr;
}
sortArr(arrInput,numInput);