"use strict";

$(document).ready(function() {

        // alert('Hello')
    // INSERT JAVASCRIPT CODE SAMPLE HERE

});

// $('.important, p').css('background-color', '#FF0');

//Alert contents of element
// var contents = $("#h1-example").html();
// alert(contents);

//Will only display first item with id.
// var pContent = $('#paragraph').html();
// alert(pContent);

$('.codeup').css('border', '1px solid red');

$('li').css('font-size', '20px');

// var h1Content = $(".h1-selector").html();
// alert(h1Content);
// var contents = $('.codeup').html();
// alert(contents);
        alert($('.codeup').html());
// var liContents = $('.li-selector').html();
// alert(liContents);

$('h1').text("Hello Cory");
$('h1').addClass("test");
$('p').addClass("test");

$('.test').css('background-color', 'orange').css('color', 'blue');

$(".codeup").fadeIn();
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("button").on("click", function() {
        $("h1").toggle();
})