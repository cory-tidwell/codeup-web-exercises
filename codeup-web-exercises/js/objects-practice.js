var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"]
}



function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellBoy1 = new BellBoy("Jimmy", 21, false, ["English, German"]);


var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Agnus",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
    hasWorkPermit: true,
    languages: ["French", "English"]
}

 function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper2 = new HouseKeeper(9, "Ginni", ["lobby", "bedroom"]);
houseKeeper1;