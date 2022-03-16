var name = prompt("What is your name?");

    if( name === "Laura") {
        console.log("hey, she's my instructor");
    } else if ( name === "Kenneth") {
        console.log("oh, he's my instructor too!");
    } else {
        console.log("um I don't know them");
    }



var studentGrade = prompt("Input student grade:")
var myGrade = isPassing(studentGrade);

function isPassing(findGrade) {
      var result;
        if (findGrade >= 70) {
            result = "Passing!";
        } else {
            result = "Failing!";
        } return result;
}
console.log(myGrade);
