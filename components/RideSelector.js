import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "./carList";

const RideSelector = ({pickupCordinates, dropOffCordinates}) => {
    const [rideDuration, setRideDuration] = useState(0);
    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCordinates[0]},${pickupCordinates[1]};${dropOffCordinates[0]},${dropOffCordinates[1]}?access_token=pk.eyJ1Ijoic2FoaWxtZWpha2hhcyIsImEiOiJjbDE4N21kMW4wYjlpM2ltbThsbHdpZWtnIn0.bdSWoFVV203mLD2u8aVmlQ`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setRideDuration(data.routes[0]?.duration / 60);
        })
    },[pickupCordinates, dropOffCordinates])
    // console.log(carList)
  return (
    <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
        {carList.map((data, index) => {
            return <Car key={index}>
                <CarImage src={data.imgUrl} alt="carImage"/>
                <CarDetails>
                    <Service>{data.service}</Service>
                    <Time>{(rideDuration / data.multiplier).toFixed(2)} min away</Time>
                </CarDetails>
                <Price>{`₹` + (rideDuration * data.multiplier * 12.18 ).toFixed(1)}</Price>
            </Car>
        })}
            
        </CarList>
    </Wrapper>
  )
}

export default RideSelector;

const CarDetails = tw.div`
    flex flex-col flex-1 pl-3
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
text-sky-600 text-xs
`
const Price = tw.div`
    pr-3
`

const Car = tw.div`
    flex py-2 px-4 items-center border-b
`
const CarImage = tw.img`
    w-20
`
const Wrapper = tw.div`
    flex-1 overflow-y-scroll
`
const Title = tw.div`
    py-2 text-center text-gray-500 text-xs border-b
`
const CarList = tw.div`
  flex flex-col overflow-y-scroll
`