/*alert("Welcome to my website!");

var userInput = prompt('What is you favorite color?:');
alert('Great, ' + userInput + ' is your favorite color too!');


let myMovies = [{
    "title": "The little mermaid",
    "days rented": "3",
    "cost per day": "3",
    "total cost": "$9"
},
    {
        "title": "Brother Bear",
        "days rented": "5",
        "cost per day": "3",
        "total cost": "$15"
    },
    {
        "title": "Hercules",
        "days rented": "1",
        "cost per day": "3",
        "total cost": "$3"
    }];


for(let i = 0; i < myMovies.length; i++){
    console.log(myMovies[i]);
}
*/
alert("Welcome to Blockbuster!");
alert("Available to rent: The Little Mermaid, Hercules, Brother Bear")

var myMovie = prompt('What movie would you like to rent?');
var howLong = prompt('How many days would you like to rent it?');



var total = parseInt(howLong) * 3;

alert('You rented ' + myMovie + ' for ' + howLong + ' days and it costs ' + total + ' dollars!');