import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import tw from "tailwind-styled-components";



mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxtZWpha2hhcyIsImEiOiJjbDE4N21kMW4wYjlpM2ltbThsbHdpZWtnIn0.bdSWoFVV203mLD2u8aVmlQ';

const Map = ({pickupCordinates, dropOffCordinates}) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [84.90103510005835, 22.253080047083994],
          zoom: 3,
          });
          if(pickupCordinates){
            addToMap(map, pickupCordinates)
        }
        if(dropOffCordinates){
            addToMap(map, dropOffCordinates)
        }
        if(pickupCordinates && dropOffCordinates){
            map.fitBounds([
                pickupCordinates, // southwestern corner of the bounds
                dropOffCordinates // northeastern corner of the bounds
                ], {
                    padding: 60,
                    maxZoom: 14,
                });
        }
           
        console.log(`pickupCordinates ${pickupCordinates} & dropOffCordinates ${dropOffCordinates}`);
      },[pickupCordinates, dropOffCordinates]);

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);  
   
      }

  return (
      
    <Wrapper id='map'></Wrapper>
  )
}

export default Map;

const Wrapper = tw.div`
  bg-gray-200
  flex-1
  h-1/2
`