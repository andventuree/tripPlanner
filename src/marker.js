'use strict'
const mapboxgl = require('mapbox-gl');

 function buildMarker(type, location) {
  let markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if(type === 'activity'){
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if(type === 'hotel'){
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else { //restaurant
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(location);
}

module.exports = buildMarker;
