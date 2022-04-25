"use strict"


//receives output from renderCoffees to be displayed on the screen accordingly.
function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6 d-flex mb-3 p-2">';
    html += '<img src=' + coffee.imgURL + ' class="image" height="30px" mr-2 />';
    html += '<h3 id="name" class="ml-2">' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//receives filteredCoffees list from searchCoffees
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//searches on every letter input on key press.  Will store every matched coffee in filteredCoffees array.
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let coffeeName = search.value;
    console.log(coffeeName);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().indexOf(coffeeName.toUpperCase()) > -1) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees)
}

//Add coffee
function pushFunction(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var roastAndName = {
        id: coffees.length += 1,
        name :  added.value,
        roast : addCoffee.value,
        imgURL : coffees.imgURL
    }

    if (addCoffee.value === "light") {
        roastAndName.imgURL = "images/img.png";
    } else if (addCoffee.value === "medium") {
        roastAndName.imgURL = "images/img_1.png";
    } else if (addCoffee.value === "dark") {
        roastAndName.imgURL = "images/img_2.png";
    }

    // localStorage.setItem("newCoffee", JSON.stringify(roastAndName));
    // var newestCoffee = JSON.parse(localStorage.getItem('newCoffee'));
    coffees.pop();
    coffees.push(coffees);
    tbody2.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', imgURL: "img/lightcity.png"},
    {id: 2, name: 'Half City', roast: 'light', imgURL: "img/halfcity.png"},
    {id: 3, name: 'Cinnamon', roast: 'light', imgURL: "img/cinnamon.png"},
    {id: 4, name: 'City', roast: 'medium', imgURL: "img/city.png"},
    {id: 5, name: 'American', roast: 'medium', imgURL: "img/american.png"},
    {id: 6, name: 'Breakfast', roast: 'medium', imgURL: "img/breakfast.png"},
    {id: 7, name: 'High', roast: 'dark', imgURL: "img/high.png"},
    {id: 8, name: 'Continental', roast: 'dark', imgURL: "img/continental.png"},
    {id: 9, name: 'New Orleans', roast: 'dark', imgURL: "img/neworleans.png"},
    {id: 10, name: 'European', roast: 'dark', imgURL: "img/european.png"},
    {id: 11, name: 'Espresso', roast: 'dark', imgURL: "img/espresso.png"},
    {id: 12, name: 'Viennese', roast: 'dark', imgURL: "img/viennese.png"},
    {id: 13, name: 'Italian', roast: 'dark', imgURL: "img/italian.png"},
    {id: 14, name: 'French', roast: 'dark', imgURL: "img/french.png"},
];
var tbody = document.querySelector('#coffees');
var tbody2 = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let addCoffee = document.querySelector('#coffeeAdded');
let search = document.querySelector("#searchCoffee");
let added = document.querySelector("#added");
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', searchCoffees);
addCoffee.addEventListener('click', pushFunction);

// event listener that takes in a value. Updates roast selection from drop down menu.
roastSelection.addEventListener("change", function() {
    let selectedRoast = roastSelection.value;
    let html = '';
    coffees.forEach(coffee => {
        if (selectedRoast === coffee.roast) {
            console.log(renderCoffee(coffee));
            tbody.innerHTML = html += renderCoffee(coffee);

        } else if (selectedRoast === "all") {
            tbody.innerHTML = renderCoffees(coffees);
        }
    })
})

search.addEventListener('keyup', searchCoffees)