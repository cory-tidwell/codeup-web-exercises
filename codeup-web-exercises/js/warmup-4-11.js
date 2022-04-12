// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number



// function getPrimes(max) {
//     var sieve = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) {
//         if (!sieve[i]) {
//             // i has not been marked -- it is prime
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) {
//                 sieve[j] = true;
//             }
//         }
//     }
//     return primes;
// }
//
// getPrimes(100);



function findPrimes() {
    var count = 0;
    var i;
    var j;
    var counter = 50;
    var a = [];


    // while (a.length < 50) {
        for (j = 2; j <= 100; j++) {
        // if (j + 1 % 2 == 0)
        //     break;
            for (i = 1; i <= j; i++) {
          //  console.log(j);
                if (j % i == 0)
                    count++

        }
            if (count == 2) {
                //console.log(j);
                a.push(j);
                console.log(j);
        }

        count = 0
    }
}
findPrimes();

var primeArray = [];
var count = 0;
var j = 2;

do {
    for (var i = 1; i <= j; i++) {
        (j % i === 0) ? count++ : false;
    }
    (count === 2) ? primeArray.push(j) : false;
    count = 0;
    j += 1;
} while (primeArray.length < 50);

console.log(primeArray);