import React from 'react'
import designMapObj from './MapObj'

export default class SecondMap extends React.Component {
  
  componentDidMount(){
    
    let mapDetails = { container : this.map,
                       style : 'mapbox://styles/mapbox/satellite-v9',
                       center : [77.5946, 12.9716],
                       zoom : 12.5
                     };

    designMapObj(mapDetails); 

  }

  render() {

    return (
      <div ref={el => this.map = el} className="absolute top right left bottom TabCss" />
    );
  }
}