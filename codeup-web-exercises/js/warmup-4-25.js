// example Input: [1,-2,2,-4]
// expected output: 2

var numInput = [1,-2,2,-4,-5,9,-11];
var result = 0;
function stripNegatives(input) {
    for(i = 0; i < numInput.length; i++){
        if(input[i] < 0) {
          result += 1;
        }
    } return result;
}
stripNegatives(numInput);