
import React from 'react'
import ReactDOM from "react-dom"
import Tooltip from "./tooltip"
import mapboxgl from 'mapbox-gl'

export default class FirstMap extends React.Component{
  
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
      )
    } else {
      this.tooltipContainer.innerHTML = ''
    }
  }

  componentDidMount() {
    
    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div')

    const map = new mapboxgl.Map({
        container : this.map,
        style : 'mapbox://styles/mapbox/streets-v9',
        center : [77, 12],
        zoom : 12.5 
    });
    
    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-120, 0]
    }).setLngLat([0,0]).addTo(map)
    
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      tooltip.setLngLat(e.lngLat);
      map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      this.setTooltip(features);
    })
  }
  
  render() {
    return ( 
        <div ref={el => this.map = el} className="absolute top right left bottom TabCss" /> 
      )
  }
}