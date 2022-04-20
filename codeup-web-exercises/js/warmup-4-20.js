// List the primitive data types in javascript

//string
//number
//boolean
//null
//undefined
//symbol

// Write a function that takes an object as argument
// Swap the Javascript object's key with its values and return the resulting object

// example input: {z:'a',y:'b',x:'c',w:'d'}
// expected output: {a:'z',b:'y',c:'x',d:'w'}
// -------------------------
//     example input:{2:'a',4:'b',6:'c',8:'d'}
// expected output: {a:'2',b:'4',c:'6',d:'8'}
// -------------------------

//Get an array of key-value pairs using the Object.entries() method.
// Use the map() method to swap the place of each key and value.
// Use the Object.fromEntries() method to transform the key-value pair arrays to an object.

function swapKeysAndValues(obj) {
    const swapped = Object.entries(obj).map(([key, value]) => [value, key]);
    return Object.fromEntries(swapped);
}
console.log(swapKeysAndValues({z:'a',y:'b',x:'c',w:'d'}));
