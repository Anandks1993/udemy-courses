const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a93eed986302ae3c9338f30d3f019f60&query=Chennai&units=f';

request({ url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3NhbmFuZDE5OTMiLCJhIjoiY2szcTJtdDBhMDM1YzNibzlkaDUxaHd4dCJ9.4b-W30G6zXt6VmFJ6z2AYQ';

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude)
});