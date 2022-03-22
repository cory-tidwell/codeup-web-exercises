
var count = 2;
while (count < 65000) {
    console.log(count);
    count*=2;
}



// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var myCones = Math.floor(Math.random() * 5) + 1;
console.log(myCones);
do {
    var remainingCones = allCones -= myCones;
    console.log(remainingCones);
        if (remainingCones < myCones) {
            console.log("We are outta cones!");
        }
}

while (allCones > myCones);