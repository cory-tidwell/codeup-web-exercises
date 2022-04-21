// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]


var arrInput = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];

arrInput.forEach(input => {input.continent = 'Asia'});

console.log(arrInput);

// another solution

var arrInput = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];

var addItemToObj = (input) => {
    for (let i = 0; i < input.length; i++) {
        input[i].continent = 'Asia';
    } return input;
}
console.log(addItemToObj(arrInput));












