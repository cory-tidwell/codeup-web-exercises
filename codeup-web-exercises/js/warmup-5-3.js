// Write a function that takes an object (a) as argument
// Return an array with all object keys

var myObj = {a:1,b:2,c:3};

var objToArray = (input) => {
    let result = Object.keys(input);
    return result;
}
objToArray(myObj);


