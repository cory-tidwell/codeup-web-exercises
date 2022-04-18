var i = 20;
while (i >= 0) {
    console.log(i);
    i--;
}

for (var i = 20; i >= 0; i--) {
    console.log(i);
}


// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']

var object1 = {j:9,i:2,x:3,z:4};
var result = [];

function objEntry(input) {
    for (var [key] of Object.entries(object1)) {
        result += key;
    } return result.split("");
}
objEntry(object1);