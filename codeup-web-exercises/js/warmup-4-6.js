// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];


var myArray = [5,-8,2,6,9,'b',3,2,"hello",33,'t'];
var noDupeArray = [];
var result = [];

    function sortArr(input) {
        noDupeArray = [...new Set(input)];
        for (var i = 0; i < noDupeArray.length; i++) {
            if ((/[0-9]/.test(noDupeArray[i]))) {
                result.push(noDupeArray[i])
            }
        } return result.sort();
    }
console.log(sortArr(myArray))
// function sortArr (input) {
//     // if ( !(/[0-9]/.test(input[i]))) {
//     //     input[i].slice(i);
//     // }
//     input = input.sort();
//     for (var i = 0; i < myArray.length; i++) {
//         if ( !(/[0-9]/.test(input[i]))) {
//            input.splice(1,i);
//         }
//         if(input[i] !== placeHolder) {
//            noDupeArray.push(input[i]);
//            placeHolder = input[i];
//         }
//     }
//     //return input;
//     return noDupeArray;
// }
//
// sortArr(myArray);