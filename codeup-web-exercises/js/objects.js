(function() {
  "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// var person = {
//         firstName: "Cory",
//         lastName: "Tidwell",
 //   }
        // age: 39,
        // cityBorn: "Los Angeles",
        // cityLive: "White Marsh",
        // faveTeam: "Lakers",
        // getYounger: function (){
        //     //return coryObject.age - 10;
        //     return this.age - 10;
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // var person = {
    //     firstName: "Cory",
    //     lastName: "Tidwell",
    //     sayHello: function () {
    //         return console.log("Hello from " + person.firstName +" " + person.lastName + "!");
    //     }
    // }
    // console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
// Object.values(shoppers).forEach((val) => {
//     if ( val.amount >= 200) {
//         var discount = (.12 * val.amount);
//         var total = val.amount - (.12 * val.amount);
//         console.log(val.name + " before discount: $" + val.amount + " amount off $" + discount + " Amount after discount $" + total);
//         // console.log(shoppers.name);
//     } else if (val.amount < 200) {
//         console.log(val.name + " doesn't get a discount, you owe $" + val.amount);
//     }
//     })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
// var books = [
//         {
//             title: "Cyptoassets",
//             firstName: "Chris",
//             lastName: "Burniske",
//         },
//         {
//             title: "Blockchain Revolution",
//             firstName: "Alex",
//             lastName: "Tapscott",
//         },
//         {
//             title: "The Book of Satoshi",
//             firstName: "Phil",
//             lastName: "Champagne",
//         },
//         {
//             title: "The Basics of Bitcoins and Blockchains",
//             firstName: "Antony",
//             lastName: "Lewis",
//         },
//         {
//             title: "The Blockchain Developer",
//             firstName: "Elad",
//             lastName: "Elrom",
//         }]
// console.log(books[0].title);
// console.log(books[0].firstName);
// console.log(books[0].lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    var books = [

        {
            title: "Cryptoassets",
            Author: {firstName: "Chris", lastName: "Burniske"}
        },
        {
            title: "Blockchain Revolution",
            Author: {firstName: "Alex", lastName: "Tapscott"}
        },
        {
            title: "The Book of Satoshi",
            Author: {firstName: "Phil", lastName: "Champagne"}
        },
        {
            title: "The Basics of Bitcoins and Blockchains",
            Author: {firstName: "Antony", lastName: "Lewis"}
        },
        {
            title: "The Blockchain Developer",
            Author: {firstName: "Elad", lastName: "Elrom"}
        },
        ]

    for (var i = 0, j = 1; i <= books.length, j <= 5; i++, j++) {
        console.log("Book " + (j));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].Author.firstName + " " + books[i].Author.lastName);
        console.log("__________________");

    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook() {
        console.log(title, Author);
        var {title, Author} = books[0];
        console.log(title);
        console.log(Author);
    }
    createBook();
// createBook("Cryptoassets", "Chris Buiniske");

    // Object.entries(books).forEach((val) => {
    //     console.log();
    //}
})();
