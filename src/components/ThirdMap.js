import React from 'react'
import designMapObj from './MapObj'

export default class ThirdMap extends React.Component {
 
  componentDidMount() {

    let mapDetails = {
      container : this.mapContainer,
      style : 'mapbox://styles/mapbox/streets-v11',
      center : [88.3953, 26.7271],
      zoom : 12
    };

    const mapObj = designMapObj(mapDetails)     

    let layerList = document.getElementById('menu')
    let inputs = layerList.getElementsByTagName('input')
    
    function switchLayer(layer) {
      let layerId = layer.target.id
      mapObj.setStyle('mapbox://styles/mapbox/' + layerId);
    }
    
    for (let i = 0; i < inputs.length; i++) {
          inputs[i].onclick = switchLayer
    }
  }

  render() {
    return ( 
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    )
  }
}