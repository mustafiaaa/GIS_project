import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGFmIiwiYSI6ImNqdjdxNDF3MTA4YWQzeW55bWMzbTQ5dW4ifQ.nHnmVIkeDZRoFsxE7EdlIg';
export default class FourthMap extends React.Component {

  componentDidMount() {

    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.0066, 40.7135],
        zoom: 16,
        pitch: 45,
        bearing: -17.6
      })
  
  // The 'building' layer in the mapbox-streets vector source contains building-height
  // data from OpenStreetMap.
  map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers
    
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
       labelLayerId = layers[i].id;
        break;
    }
  }
   
  map.addLayer({
  'id': '3d-buildings',
  'source': 'composite',
  'source-layer': 'building',
  'filter': ['==', 'extrude', 'true'],
  'type': 'fill-extrusion',
  'minzoom': 15,
  'paint': {
  'fill-extrusion-color': '#aaa',
   
  // use an 'interpolate' expression to add a smooth transition effect to the
  // buildings as the user zooms in
  'fill-extrusion-height': ["interpolate", ["linear"], ["zoom"],
    15, 0,
    15.05, ["get", "height"]],
  'fill-extrusion-base': ["interpolate", ["linear"], ["zoom"],
    15, 0,
    15.05, ["get", "min_height"]],
    'fill-extrusion-opacity': .6
    }
    }, labelLayerId);
  })
  }
  render() {
    return ( 
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    )
  }
}