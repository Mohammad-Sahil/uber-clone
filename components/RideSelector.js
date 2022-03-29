import tw from "tailwind-styled-components";
import { carList } from "./carList";

const RideSelector = () => {
    console.log(carList)
  return (
    <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
        {carList.map((data, index) => {
            return <Car key={index}>
                <CarImage src={data.imgUrl} alt="carImage"/>
                <CarDetails>
                    <Service>{data.service}</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$24.00</Price>
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