// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// example input: [1, 2, 3], [3, 4, 5]
// expected output:
//     [ 1, 2, 3, 4, 5 ]

function myArr(arr1, arr2) {
    var result = arr1.concat(arr2);

    result = [...new Set(result)];

    return result.sort();
    }
console.log(myArr([1,2,3],[3,4,5]));
