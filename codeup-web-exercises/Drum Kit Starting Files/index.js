
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for(i = 0; 1 < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");

    });
}

