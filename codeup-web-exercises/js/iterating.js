(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["CJ", "Taylor", "Jordan", "Steph"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
   // for (i = 0; i < names.length; i++) console.log(names[i]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
   // for (i = 0; i < names.length; i++) console.log(names[i]);
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
   names.forEach(function (inputNames) {
       console.log(inputNames);
   })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var myNumbers = [1, 2, 3, 4, 5];

    function first(numbers) {
        return numbers[0];
    }

    function second(numbers) {
        return numbers[1];
    }

    function last(numbers) {
        return numbers[4];
    }

    console.log(first(myNumbers));
    console.log(second(myNumbers));
    console.log(last(myNumbers));


})();
