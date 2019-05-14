/**
 * "designMapObj" function for creating map object and returning that obj. Its takes basic map properties as input and returns 
 * the map obj as output.
 * inputs :  map container, map style, map cordinates, map zoom label, map pitch and map bearing
 * output : map object  
 */

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


 function designMapObj({container, style='mapbox://styles/mapbox/satellite-v9', center = [77.5946, 12.9716], zoom = '12.5', pitch= '', bearing=''}){
    const mapObj = new mapboxgl.Map({
      container,
      style, 
      center,
      zoom,
      pitch,
      bearing
    })
    return mapObj
  }

export default designMapObj