// function printsNameAndAge() {
//
//     var myName = "Cory Tidwell";
//     var myage = 39;
//
//     console.log('My name is: ' + myName + ' and I am ' + myage + ' years old!');
//
// }
//
// printsNameAndAge();
//
//
//
// var isColdoutside = false;
//
// testColdoutside(isColdoutside);
//
// function testColdoutside(x)  {
// if (x == true) {
//
//     console.log("You will need a jacket!");
// }    else {
//     return 0;
// }
// }

var reValue = addNumbers();
addNumbers(reValue);

function addNumbers()   {
    return 4+19;
}

console.log(reValue);
