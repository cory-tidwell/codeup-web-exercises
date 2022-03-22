
var count = 2;
while (count < 65000) {
    console.log(count);
    count*=2;
}



// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// var myCones = Math.floor(Math.random() * 5) + 1;
// console.log(myCones);
// do {
//     var remainingCones = allCones -= myCones;
//     console.log(remainingCones);
//         if (remainingCones < myCones) {
//             console.log("We are outta cones!");
//         }
// }
//
// while (allCones > myCones);

// amtToSell (random 50 - 100): outside of loop (before our loop)
// amtBought (random 1 - 5); inside of the loop
// amtSold --> (amtToSell - amtBought)
// do while loop
// amtToSell will decrease as amtSold & amtBought increases
// IF (amtToSell > amtBought) we will continue.whether or not we have inventory left.
// IF (amtToSell < amtBought) not enough inventory
// IF (amtToSell == 0) we sold everything

var amtToSell = Math.floor(Math.random() * 50) + 50;

do {
    amtToSell -= amtBought;
    var amtBought = Math.floor(Math.random() * 5) + 1;

        if (amtToSell < amtBought && amtToSell > 0) {
            console.log("not enough inventory!");
        } else if (amtToSell < 0 || amtToSell === 0) {
            console.log("out of STOCK!");
        }

    console.log("amtToSell: ", amtToSell);
    console.log("amtBought: ", amtBought);

}   while (amtToSell >= amtBought)
