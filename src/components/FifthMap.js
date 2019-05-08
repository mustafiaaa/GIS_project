import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGFmIiwiYSI6ImNqdjdxNDF3MTA4YWQzeW55bWMzbTQ5dW4ifQ.nHnmVIkeDZRoFsxE7EdlIg';
export default class FourthMap extends React.Component {

  componentDidMount() {

    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-68.13734351262877, 45.137451890638886],
        zoom: 6,
        pitch: 45,
        bearing: -17.6
      })
  
  // The 'building' layer in the mapbox-streets vector source contains building-height
  // data from OpenStreetMap.
  map.on('load', function () {
 
    map.addLayer({
    'id': 'MainPoly',
    'type': 'fill',
    'source': {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'geometry': {
    'type': 'Polygon',
    'coordinates': [[[-67.13734351262877, 45.137451890638886],
    [-66.96466, 44.8097],
    [-68.03252, 44.3252],
    [-69.06, 43.98],
    [-70.11617, 43.68405],
    [-70.64573401557249, 43.090083319667144],
    [-70.75102474636725, 43.08003225358635],
    [-70.79761105007827, 43.21973948828747],
    [-70.98176001655037, 43.36789581966826],
    [-70.94416541205806, 43.46633942318431],
    [-71.08482, 45.3052400000002],
    [-70.6600225491012, 45.46022288673396],
    [-70.30495378282376, 45.914794623389355],
    [-70.00014034695016, 46.69317088478567],
    [-69.23708614772835, 47.44777598732787],
    [-68.90478084987546, 47.184794623394396],
    [-68.23430497910454, 47.35462921812177],
    [-67.79035274928509, 47.066248887716995],
    [-67.79141211614706, 45.702585354182816],
    [-67.13734351262877, 45.137451890638886]]]
    }
    }
    },
    'layout': {},
    'paint': {
    'fill-color': '#088',
    'fill-opacity': 0.8
    }
    })

    //adding another polygon layer 
    map.addLayer({
        'id': '1st_SubPloy',
        'type': 'fill',
        'source': {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[  
        [-69.5529380728571, 45.191566410467345],  
        [-69.51182840121724, 45.22568853009108],  
        [-69.01101171464406, 45.03478034166969],  
        [-69.00516334051532, 45.02435112632756],  
        [-68.99351101028931, 45.00356623990666],  
        [-68.97140579785749, 44.9852373572069],  
        [-68.91864651685691, 44.72589881736201],  
        [-68.97884790678002, 44.69038871086545],  
        [-69.04890842653472, 44.65273913530211],  
        [-69.1027818136702, 44.6079861723517],  
        [-69.91333571715761, 44.139986922961356],  
        [-69.9525141740308, 44.10046457433029]]]
        }
        }
        },
        'layout': {},
        'paint': {
        'fill-color': '#000080',
        'fill-opacity': 0.4
        }
        });

        //adding another polygon layer 
        map.addLayer({
        'id': '2nd_SubPloy',
        'type': 'fill',
        'source': {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[  
        [-69.34590685492365, 45.651404747282015],  
        [-69.39363636895942, 45.735743968513816],  
        [-69.41437519223253, 45.772350339549234],  
        [-69.43528707939946, 45.80923787524554],  
        [-69.50172132223238, 45.949543990064626],  
        [-69.50893380939085, 45.9622616394897],  
        [-69.03310331253412, 46.91333074916244],  
        [-69.00756560693699, 46.9188643134662],  
        [-68.99479675413359, 46.92163088133924],  
        [-68.94372134292965, 46.932695724292586],  
        [-68.06236454719176, 46.483397100538184],  
        [-68.03614770159926, 46.41575719194077],  
        [-68.02576583074111, 46.38894856963856],  
        [-67.99846126343475, 46.351590256744885],  
        [-67.98825993474766, 46.32512274436883],  
        [-67.99473263017984, 46.21036079073738],  
        [-68.01302162783625, 46.19233916802932],  
        [-68.0312594674484, 46.174362068867964],  
        [-68.89651688255393, 45.26421837614052],  
        [-68.95649150428872, 45.26307332891287],  
        [-69.01178376675436, 45.27531398781841],  
        [-69.0455996697352, 45.29247337023824],  
        [-69.249312080061, 45.59281050833826],  
        [-69.2558884968573, 45.604603348234775],]]
        }
        }
        },
        'layout': {},
        'paint': {
        'fill-color': '#DC143C',
        'fill-opacity': 0.3
        }
        });
        
        // map.on('mousemove', (e) => {
        //     console.log('['+e.lngLat.lng+', '+e.lngLat.lat+'],');
        // })
    })
   
  }
  render() {
    return ( 
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

