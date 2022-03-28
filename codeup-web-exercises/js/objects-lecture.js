

var coryObject = {
    fullName: "Cory Tidwell",
    age: 39,
    cityBorn: "Los Angeles",
    cityLive: "White Marsh",
    faveTeam: "Lakers",
    getYounger: function (){
        //return coryObject.age - 10;
        return this.age - 10;

    }
}
console.log(coryObject.getYounger());

var car = {
    year: 2016,
    make
}

var car = {
    year: 2020,
    make: "honda",
    model: "fit",
    has4Wheels: true,
    leather: true,
    wheels: 4,
    doors: 2,
    stereo: false,
    radioStations: [104.5, 95.1, 101.1, "wrr", 105.3, "kntu", 96.1]
}
console.log("I drive a " + car.year + " " + car.make + " and I like to listen to " + car.radioStations[2] + " station and "+ car.radioStations[0] + " station.");


