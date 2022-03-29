import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from '../components/map';
import RideSelector from '../components/RideSelector';

const Confirm = () => {
    const router = useRouter();
    const {pickup, dropoff} = router.query;
    console.log(`${pickup} and ${dropoff}`)

    const [pickupCordinates, setPickupCordinates] = useState();
    const [dropOffCordinates, setDropOffCordinates] = useState();

    useEffect(() => {
        getPickupCordinates(pickup);
        getDropOfCordinates(dropoff);
    },[pickup, dropoff])
    const getPickupCordinates = (pickup) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2FoaWxtZWpha2hhcyIsImEiOiJjbDE4N21kMW4wYjlpM2ltbThsbHdpZWtnIn0.bdSWoFVV203mLD2u8aVmlQ",
                limit: 1
            })
        )
        .then(res => res.json())
        .then((data) => setPickupCordinates(data.features[0].center));
        // .catch((err) => console.log(err));
    }
    const getDropOfCordinates = (dropoff) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2FoaWxtZWpha2hhcyIsImEiOiJjbDE4N21kMW4wYjlpM2ltbThsbHdpZWtnIn0.bdSWoFVV203mLD2u8aVmlQ",
                limit: 1
            })
        )
        .then(res => res.json())
        .then((data) => setDropOffCordinates(data.features[0].center));
        // .catch((err) => console.log(err));
    }
  return (
    <div className="containerWidth">
    <Wrapper>
        <Map
            pickupCordinates={pickupCordinates}
            dropOffCordinates={dropOffCordinates}
        />
        <ConfirmationBox>
        <RideSelectorBox>
            <RideSelector/>
        </RideSelectorBox>
        <ConfirmButton>
            Confirm UberX
        </ConfirmButton>
            {/* Ride Selector */}
            {/* confirm Button */}
        </ConfirmationBox>
    </Wrapper>
    </div>
  )
}

export default Confirm;

const Wrapper = tw.div`
    bg-gray-200 h-screen flex flex-col
`
const ConfirmationBox = tw.div`
    flex-1 bg-white flex flex-col h-1/2
`
const RideSelectorBox = tw.div`
    flex-1 overflow-y-scroll
`
const ConfirmButton = tw.button`
    bg-black text-white p-2 mt-4 mx-3 transition bg hover:bg-gray-800 mb-3
`
