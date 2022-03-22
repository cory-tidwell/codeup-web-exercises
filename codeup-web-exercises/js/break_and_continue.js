// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) { continue; }
//     console.log("Here is an odd number: " + i + "");
// }




do {

    var i = parseInt(prompt("Input a number between 1 and 50:"));
   // var y = i;
        if (i % 2 !== 0 && i < 50) {
            for (var y = 1; y < 50; y += 2){
                if ( y == i) {
                    console.log("Yikes! Skipping number: " + i);
                    continue;
                } else  {
                console.log("Here is an odd number: " + y);
                continue;
            }}
        break;
}}
while (i % 2 === 0 || i < 0 || i > 50 || isNaN(i))


//
// for (var y = i; y < 50; y++) {
//     console.log(y);
// }



// for (var i = prompt("Input a number between 1 and 50:"); i < 50; i++) {
//     if (i % 2 === 0) { break; }
//     console.log("Here is an odd number: " + i + "");
// }
//
// var myNumber = 13;
// function oddNumbers(number){
//     var odd =""
//     for(let i=0; i<=number; i++){
//         if(i%2 != 0){
//             odd.push(i)
//             console.log(i);
//         }
//     }
// }
// oddNumbers(myNumber);
//
//
// for (var i = 1; i < 10; i += 2){
//     console.log("Here is an odd number: " + i);
// }
// //console.log(myArray); // console output [ 1, 3, 5, 7, 9 ]