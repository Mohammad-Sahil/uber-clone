import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import tw from "tailwind-styled-components";



mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxtZWpha2hhcyIsImEiOiJjbDE4N21kMW4wYjlpM2ltbThsbHdpZWtnIn0.bdSWoFVV203mLD2u8aVmlQ';

const map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [84.90103510005835, 22.253080047083994],
          zoom: 3,
          });
      },[])

  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default map

const Wrapper = tw.div`
  bg-red-200
  flex-1
`