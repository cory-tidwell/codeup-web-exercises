// You have rented some movies for your kids: The little mermaid (for 3 days), Brother
// Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're
// going to like it). If price for a movie per day is $3, how much will you have to pay?
alert("Welcome to Blockbuster!");
alert("Available to rent: The Little Mermaid, Hercules, Brother Bear")

var myMovie1 = prompt('What movie would you like to rent?');
var myMovie2 = prompt('What movie would you like to rent?');
var myMovie3 = prompt('What movie would you like to rent?');

var daysMovie1 = prompt('How many days would you like to rent it?');
var daysMovie2 = prompt('How many days would you like to rent it?');
var daysMovie3 = prompt('How many days would you like to rent it?');

var total = parseInt(daysMovie1) + parseInt(daysMovie2) + parseInt(daysMovie3);
var cost = 3

alert('Your total is: ' + total * cost);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and
// Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380,
// and Facebook $350. How much will you receive in payment for this week? You
// worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var wageGoogle = 400;
// var wageAmazon = 380;
// var wageFacebook = 350;
//
// var gPaid = wageGoogle * 6;
// var aPaid = wageAmazon * 4;
// var fPaid = wageFacebook * 10;
//
// console.log('Google paid you $' + gPaid + ', Amazon paid you $' + aPaid + ', and Facebook paid you $' + fPaid + '!');

// A student can be enrolled in a class only if the class is not full and the class schedule
// does not conflict with her current schedule.

// var classFull = prompt('is the class full? (true/false)');
// var scheduleConflict = prompt('does it conflict with your schedule? (true/false)');
//
// if (classFull == 'false' && scheduleConflict == 'false') {
//     alert('You can enroll!');
// } else {
//     alert('You cannot enroll at this time!');
// }

// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.

// var memPremium = prompt('Are you a premium member? (yes/no)');
// var expiredOffer = prompt('Is the offer expired? (yes/no)');
//
// if (memPremium == 'yes' && expiredOffer == 'no') {
//     alert('There are no item limitations for you!');
// } else if (memPremium == 'no' && expiredOffer == 'no') {
//     alert('You must purchase 2 or more items!');
// } else {
//     alert('The offer is expired!');
// }