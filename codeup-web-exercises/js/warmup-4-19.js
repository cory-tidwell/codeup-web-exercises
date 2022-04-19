// Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)
//
// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set

// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
// example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
// -------------------------

function byThree() {
    var result = [];
    for(var i = 1; i <= 15; i++) {
        if(i % 3 === 0) {
            console.log(i);
            result.push(i);
        } //else return false;
    } return result;
}
byThree();

var arr = [3, 4, 5, 6]
var mySet = new Set([1, 2, 3]);
//console.log(result);
function myArr(arr1, arr2) {
   // var result = arr1.concat(arr2);
   //  console.log(result);
    result = new Set([...arr2, ...arr1]);

    return result;
}
console.log(myArr(arr, mySet));
