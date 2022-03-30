// Write a function that filters out numbers from a list.
//     Example input: [3,g,s,5,j,8,2,d,6,h,9,l,5,s,2,3]
// Expected Output: [a,s,j,d,h,l,s]


var myArray = [3,'g','s',5,'j',8,2,'d',6,'h',9,'l',5,'s',2,3];
var myLetters = [];

function removeNumbers(arr) {
for ( let i = 0; i <= myArray.length; i++) {
    if (typeof arr[i] === 'string') {
      myLetters.push(arr[i]);
    }
}   return myLetters;
}
removeNumbers(myArray);