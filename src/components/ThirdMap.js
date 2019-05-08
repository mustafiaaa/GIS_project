import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import Tooltip from './tooltip'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default class ThirdMap extends React.Component {
  tooltipContainer;

  setTooltip(features) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          Tooltip, {
            features
          }
        ),
        this.tooltipContainer
      );
    } else {
      this.tooltipContainer.innerHTML = ''
    }
  }

  componentDidMount() {

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div')

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [88.3953, 26.7271],
      zoom: 12
    })

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-120, 0]
    }).setLngLat([0,0]).addTo(map)
    
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point)
      tooltip.setLngLat(e.lngLat)
      map.getCanvas().style.cursor = features.length ? 'pointer' : ''
      this.setTooltip(features)
    })
    var layerList = document.getElementById('menu')
    
    var inputs = layerList.getElementsByTagName('input')
    
    function switchLayer(layer) {
    var layerId = layer.target.id
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
    for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer
    }
  }

  render() {
    return ( 
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    )
  }
}