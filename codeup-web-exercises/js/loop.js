const cars = ["ford", "chevy", "BMW"];
const length = cars.length;

for (let i = 0; i < length; i++) {
    console.log(cars[i]);
}

const groceries = ["Corn", "Chicken", "Steak", "Rice", "Pasta", "Tomatoes", "Beans", "Ice Cream"];
const amazonShopping = ["Remote", "Headphones", "Paper", "Pens", "Frames", "Plates", "Forks"];

function unpackItems (array) {
    for (let i = array.length - 1, j = 1; i > -1; i--, j++) {
        console.log(`Unpacking item ${j}: ${array[i]}.`);
    }
}
unpackItems(groceries);




for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("----------------");
}
