"use strict";

mapboxgl.accessToken = MAPBOX_KEY;
var map;
var marker;

var coordinates = document.getElementById('coordinates');
console.log(navigator)
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true})

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
    setupMap([-98.4946, 29.4252])
}

function setupMap(center) {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 8,
        center: [-98.4946, 29.4252],
    });
     marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4946, 29.4252])
        .addTo(map);

        function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    }

    // marker.on('dragend', onDragEnd);
    marker.on('dragend', () => {
        let long1 = marker.getLngLat().lng;
        let lat1 = marker.getLngLat().lat;
        let coord1 = [long1, lat1];
        gettingWeather(lat1, long1);
        // console.log(coord1);
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coord1}.json?access_token=${MAPBOX_KEY}`)
            .then(async (response) => {
                let data = await response.json();
                console.log(data.features[2].context[2].text);
                document.getElementById('location').innerHTML = `${data.features[3].text}`;
            });
        fetch(url).then(async (response) => {
            let data = await response.json();
            cardDataDisplay(data);
        })
    });
}
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
//         zoom: 9, // starting zoom
//         center: center
//     });
//
//     const marker = new mapboxgl.Marker({
//         draggable: true
//     })
//         .setLngLat([-98.4946, 29.4252])
//         .addTo(map);
//
//     function onDragEnd() {
//         const lngLat = marker.getLngLat();
//         coordinates.style.display = 'block';
//         coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
//     }
//
//     marker.on('dragend', onDragEnd);
//
// }






// var darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/29.4252, -98.4946"
//
// function getData() {
//     $.get(darkSkyUrl).done(function (data){
//
//
//         var day = data.daily.data;
//         var todayTemperature = data.currently.temperature;
//         var html = '';
//         var today = new Date().getDay();
//
//         for (var i = 0; i < day.length - 1; i++) {
//             var icon = day[i].icon;
//             var dayOfWeek = (new Date((day[i].time) * 1000)).getDay();
//             html += '<div class="eachDay">';
//         }
//     })
// }
const app = {
    init: () => {
        document
            .getElementById('btnGet')
            .addEventListener('click', app.fetchWeather);
        document
            .getElementById('btnCurrent')
            .addEventListener('click', app.getLocation);
    },
    fetchWeather: (ev) => {
        //use the values from latitude and longitude to fetch the weather
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let key = OPEN_WEATHER_APPID;
        let lang = 'en';
        let units = 'imperial';
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
        //fetch the weather
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then((data) => {
                app.showWeather(data);
            })
            .catch(console.err);
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, //10 seconds
            maximumAge: 1000 * 60 * 5, //5 minutes
        };
        navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    },
    ftw: (position) => {
        //got position
        document.getElementById('latitude').value =
            position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value =
            position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        //geolocation failed
        console.error(err);
    },
    showWeather: (resp) => {
        console.log(resp);
        let row = document.querySelector('.weather.row');
        //clear out the old weather and add the new
        // row.innerHTML = '';
        row.innerHTML = resp.daily
            .map((day, idx) => {
                if (idx <= 4) {
                    let dt = new Date(day.dt * 1000); //timestamp * 1000
                    let sr = new Date(day.sunrise * 1000).toTimeString();
                    let ss = new Date(day.sunset * 1000).toTimeString();
                    return `<div class="col">
              <div class="card">
              <h5 class="card-title p-2">${dt.toDateString()}</h5>
                <img
                  src="http://openweathermap.org/img/wn/${
                        day.weather[0].icon
                    }@4x.png"
                  class="card-img-top"
                  alt="${day.weather[0].description}"
                />
                <div class="card-body">
                  <h3 class="card-title">${day.weather[0].main}</h3>
                  <p class="card-text">High ${day.temp.max}&deg;F Low ${
                        day.temp.min
                    }&deg;F</p>
                
                  <p class="card-text">High Feels like ${
                        day.feels_like.day
                    }&deg;F</p>
                  <p class="card-text">Pressure ${day.pressure}mb</p>
                  <p class="card-text">Humidity ${day.humidity}%</p>
                  <p class="card-text">UV Index ${day.uvi}</p>
                  <p class="card-text">Precipitation ${day.pop * 100}%</p>
                  <p class="card-text">Dewpoint ${day.dew_point}</p>
                  <p class="card-text">Wind ${day.wind_speed}m/s, ${
                        day.wind_deg
                    }&deg;</p>
                  <p class="card-text">Sunrise ${sr}</p>
                  <p class="card-text">Sunset ${ss}</p>
                </div>
              </div>
            </div>
          </div>`;
                }
            })
            .join(' ');
    },
};


app.init();
function gettingWeather(lat, lon){
    let url = new URL('http://api.openweathermap.org/data/2.5/onecall')
    url.search = new URLSearchParams({
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        appid: OPEN_WEATHER_APPID,
        exclude: 'minutely,hourly,alerts',
        units: 'imperial',
    });

    fetch(url).then( async (response) => {
        let data = await response.json();
        console.log(data);
        cardDataDisplay(data);
    })
}
function cardDataDisplay(data) {
    let html = "";
    for (let i = 0; i < 5; i++) {
        let inner = document.getElementById('info');
        let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * i).toDateString();
        inner.innerHTML =
            html +=
                `<div class="card-group flex-row my-5">
                        <div class="card1">
                            <div class="card-body">
                                <h5 class="card-header back">${date}</h5>
                                    <p class="card-text">${data.daily[i].temp.day} &#8457 / ${data.daily[i].temp.min} &#8457</p>
                                    <p class="card-text">Description: ${data.daily[i].weather[0].description}</p>
                                    <img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png" class="w-50 mx-5" alt="">
                                    <p class="card-text">Humidity: ${data.daily[i].humidity}</p>
                                    <p class="card-text">Wind: ${data.daily[i].wind_speed}</p>
                                    <p class="card-text">Pressure: ${data.daily[i].pressure} </p>
                            </div>
                        </div>
                    </div>`
    }
    return html
}
