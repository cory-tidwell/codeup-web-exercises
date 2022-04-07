//Write a function that accepts a string and returns a map with the strings
// character frequency.
// example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }

// var myArr = ["b","a", "n","a","n","a"];
// var result = [];
// function stringMap(input) {
//     for(let i = 0; i < myArr.length; i++) {
//         result.push(input[i]);
//     } //return result;
//     // for(let i = 0; i < result.length; i++) {
//     //     console.log();
//     // }
// }
// stringMap(myArr);

const arr = ["b","a","n","a","n","a"];

const count = {};

for (const element of arr) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count);
