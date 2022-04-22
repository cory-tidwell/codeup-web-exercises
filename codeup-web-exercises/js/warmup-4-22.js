// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

var arr = [1, 2, 3, 4, 5, 6];

var stripArr = (input) => {
    for(i = 0; i < 3; i++) {
        input.shift();
    } return input;
}
stripArr(arr);

// 2.  Write an object that describes which brands own which cereals (you can be creative here) . After the object has been declared …
// A) add properties and values to the existing object
// B) re-assign 2 properties’ values

var objCereal = {
    kellogg: ["Frosted Flakes", "Corn Flakes", "Raisin Bran"],
    quaker: ["Cap'n Crunch", "Quisp Cereal"],
    generalMills: ["Cheerios", "Cinnamon Toast Crunch"]

};

objCereal.forEach((element) => {
    element.quaker = "test";
})
console.log(objCereal);

var band = new Object();
var band1 = {};

band.genre = "Metal";
band['test'] = "Punk"
console.log(band);

if(!!true){
    console.log('hi');
}