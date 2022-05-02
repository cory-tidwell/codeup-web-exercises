// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

var myStr = 'abcdefg';
var removeStr = (input) => {
    let temp = input.split("");
    for(i=0;i<3;i++) {
        temp.shift();
    } return temp.join("");
}
console.log(removeStr(myStr));