// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// example input: [{a:1,b:2},{a:5,b:4}]
// expected output: [{a:1,b:2},{a:5,b:4}]
// example input: [{a:2,b:10},{a:5,b:4}]
// expected output: [{a:5,b:4},{a:2,b:10}]
// example input: [{a:1,b:7},{a:2,b:1}]
// expected output: [{a:2,b:1},{a:1,b:7}]

var arrO = [{a:2,b:10},{a:5,b:4}];

arrO.sort((x, y) => {
        if(x.a < y.a) {
            return -1;
        }
});