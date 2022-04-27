// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// JavaScript program to illustrate
// calculation of no. of days between two date

// To set two dates to two variables
var date1 = new Date("06/01/2020");
var date2 = new Date("06/11/2020");

// To calculate the time difference of two dates
function daysDifference(date1, date2) {
    var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
   return console.log("Total number of days between dates  " + date1 + " and " + date2 + " is: "
        + Difference_In_Days);
}
daysDifference(date1,date2);
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25

var arrInput = [1, 2, 3, 4, 5, 6, 7];
var numInput = -3;



function myArr(arr, num) {
    console.log(arr.reduce((a, b) => a + b, num))
}
myArr(arrInput,numInput);