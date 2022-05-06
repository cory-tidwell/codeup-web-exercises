mapboxgl.accessToken = MAPBOX_KEY;
    // 'pk.eyJ1IjoiY29yeXRpZHdlbGwyIiwiYSI6ImNsMnFsZTY4aTBnY2IzY3FyZTQwZjA5Z3IifQ.QMQfEYJN8Eu-cGXdAohkww';



const geocoder = getGeocoder();

addGeocoderToMap(geocoder);

getMarker([-98.4946, 29.4252]);

setGeocoderEvent();

setMapEvent();


function getGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl,
        marker: false
    });
}

function addGeocoderToMap(){
    geocoder.onAdd(map);
    geocoder.addTo("#geocoder");
}

function getMarker(coordinates) {
    marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
}

function setGeocoderEvent(){
    geocoder.on("result", function (event){
        marker.setLngLat(event.result.geometry.coordinates);
        getForecast(event.result.geometry.coordinates);
    });
}

function setMapEvent() {
    map.on("click", function (event){
        marker.setLngLat(event.lngLat);
        getForecast([event.lngLat.lng,event.lngLat.lat]);
    });
}
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}