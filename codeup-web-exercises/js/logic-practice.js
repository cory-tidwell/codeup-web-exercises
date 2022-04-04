console.log(2 + '2');  //22
console.log(2 - '2'); //0


let nums = [1, 2, 2, 3]; //[1, 2, 3]

console.log([...new Set(nums)]);


let func = function (){

    {
        (function() {
          let l = 'let';
          var v = 'var';
        })()

    }
    console.log(v);
    console.log(l);
}
func();


console.log(5 < 6 < 7); // true 5 < 6 = true = 1 < 7 = true
console.log(7 > 6 > 5); // false 7 > 6 = true = 1 > 5 = false

let a = (...n) => { return n} ;

//convert to regular function
//let a = function() { return } ;

console.log(a('hi'));




let x = function(){
    return

}

let profile = {
    name: 'cory'
};

Object.defineProperty( profile, 'age', {
    value: 3,
    writable: false
})
// Object.freeze(profile);
// Object.seal -  allows you to modify existing properties
profile.name = 'Tidwell';
profile.age = 5;
console.log(profile);

console.log((Math.max(1,2,3,4))); //-infinity