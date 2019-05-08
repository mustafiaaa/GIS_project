import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default class FirstMap extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/satellite-v9', //satellite style map
      center: [77.5946, 12.9716],
      zoom: 12.5
    })
  }

  render() {
    return (
      <div ref={el => this.map = el} className="absolute top right left bottom TabCss" />
    );
  }
}