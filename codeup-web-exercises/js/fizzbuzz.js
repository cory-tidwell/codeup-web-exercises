function fizzBuzz(num) {
    for ( var i = 1; i <= num; i++) {
        if (i % 5 === 0 && i % 3 === 0) console.log(`${i} Fizz Buzz`);
        else if (i % 5 === 0) console.log(`${i} Buzz`);
        else if (i % 3 === 0) console.log (`${i} Fizz`);
        else console.log(i);
    }
}
fizzBuzz(100);