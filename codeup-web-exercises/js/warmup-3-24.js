Imagine the supplied array is like a pack of cards.
Write a function to shuffle an array in to a completely
new and entirely random order, much like shuffling a pack of cards.


//expected output: [4,2,8,6];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
console.log(currentIndex);
console.log(randomIndex);
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        console.log(currentIndex);
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        console.log(randomIndex);
        // And swap it with the current element.
        console.log(currentIndex);
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
            console.log(randomIndex);
    }

    return array;
}

// Used like so
var arr = [2, 4, 6, 8];
shuffle(arr);
console.log(arr);

var array = [2, 4, 6, 8];
let currentIndex = array.length, randomIndex;
console.log(currentIndex);
randomIndex = Math.floor(Math.random() * currentIndex);
console.log(randomIndex, randomIndex);