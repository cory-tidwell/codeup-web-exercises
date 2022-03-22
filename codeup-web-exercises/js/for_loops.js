
var myInput = 1;

function showMultiplicationTable(multiplier) {
    for (multiplier = 1; multiplier <= 10; multiplier++) {
    console.log('7' + ' x ' + multiplier + ' = ' + (7 * multiplier));
}}
showMultiplicationTable(myInput);


var randNumber = Math.floor(Math.random() * (200 - 20) ) + 20;
// Math.floor(Math.random() * 10);
var myInput = 1;

function showMultiplicationTable(counter, multiplier) {
    for (counter = 1; counter <= 10; counter++) {
        multiplier = Math.floor(Math.random() * (200 - 20) ) + 20;
        if (multiplier % 2 === 0) {
           console.log(multiplier + ' is even');
      //      multiplier = Math.floor(Math.random() * (200 - 20) ) + 20;
        } else {
            console.log(multiplier + ' odd');
       //     multiplier = Math.floor(Math.random() * (200 - 20) ) + 20;
        }

        // console.log('7' + ' x ' + multiplier + ' = ' + (7 * multiplier));
    }  }
showMultiplicationTable(myInput, randNumber);

|
// for (i = 1; i <= 10; i++) {
//     var y = i.toString();
//
//    // i = i.concat(y);
//    // i += 'i';
//   console.log(y.concat(y*y));
// }

function generatePyramid() {
    var totalNumberofRows = 10;
    var output = '';
    for (var i = 1; i < totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += i;
        }
        console.log(output);
        output = '';
    }
}
generatePyramid();

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}

