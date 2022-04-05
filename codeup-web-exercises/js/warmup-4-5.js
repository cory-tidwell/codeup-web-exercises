// example input: [1,2,3,4,5];
// expected output: 15
// some possible test cases to think about:
//     function should be called ‘sumArr’
// function should return a number
// function should accept an array
// function should return “sum not available” if array is empty
// function should handle non-numbers

var passedNumbers = [1,'2',3,4,5];
var result = 0;
function sumArr(input) {
    input = passedNumbers.map(Number);
    if (input === "") return "sum not available";
    for (var i = 0; i < passedNumbers.length; i++) {
        result += input[i];

    } return result;
}
sumArr(passedNumbers);

