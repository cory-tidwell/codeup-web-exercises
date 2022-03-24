(function(){
    "use strict";

    // var planets = [
    //     'Mercury',
    //     'Venus',
    //     'Earth',
    //     'Mars',
    //     'Jupiter',
    //     'Saturn',
    //     'Uranus',
    //     'Neptune'
    // ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // planets.unshift('Sun');
    // console.log(planets);
    //
    // console.log('Adding "Pluto" to the end of the planets array.');
    // planets.push('Pluto');
    // console.log(planets);
    //
    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // planets.shift();
    // console.log(planets);
    //
    // console.log('Removing "Pluto" from the end of the planets array.');
    // planets.pop();
    // console.log(planets);
    //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    // if (planets.indexOf("Earth")) {
    //     console.log(planets.indexOf("Earth"));
    // }
    var planets = [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune'
        ];
    console.log("Reversing the order of the planets array.");
    for (let i = planets.length; i >= 0; i--) {
        console.log(planets[i]);
    }
    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();


var array = [1,2,3,4,5];
console.log(array);

function arrFunc(arr) {

}
var array2 = array;
console.log(array2);