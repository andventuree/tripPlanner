const buildMarker = require('./marker.js');

console.log('in the console homie')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kdmVudHVyZWUiLCJhIjoiY2plenRtZWt2MGg5MDJwb2RhMmtrMDF4eCJ9.ln6ktmBYcPKtimlBXJXOvg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates;
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const fullstack = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
fullstack.addTo(map);

const jeffsHouse = buildMarker("hotel", [-74.011813, 40.648814]); // or [-87.6354, 41.8885]
jeffsHouse.addTo(map);
