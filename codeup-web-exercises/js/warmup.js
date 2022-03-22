// Write a javascript function that accepts the 3 lengths of a
// triangle and outputs the triangle’s area.


var side1 = parseInt(prompt("Input length of side 1:"));
var side2 = parseInt(prompt("Input length of side 2:"));
var side3 = parseInt(prompt("Input length of side 3:"));

function Area() {

   // console.log(typeof (side1));
    var s = (side1 + side2 + side3) / 2;
  //  console.log(s);
    var area = Math.sqrt(s * ((s - side1)
        * (s - side2) * (s - side3)));
   // console.log(area);
    return area;
}
var area = Area();
console.log("The triangle's area is: " + area);
