import Link from 'next/link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import tw from "tailwind-styled-components";
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const search = () => {
    const [pickup, setPickup] = useState('');
    const [dropOff, setDropOff] = useState('');
  return (
    <div className="containerWidth">
        <Wrapper>
        <ButtonContainer>
            <Link href="/"><div style={{cursor: "pointer"}}><KeyboardBackspaceIcon style={{fontSize: "35px", color: "rgba(0,0,0,0.8)"}}/></div></Link>
        </ButtonContainer>
        <InputContainer>
            <FromToIcons>
            <Circle src="https://cdn0.iconfinder.com/data/icons/basic-shapes-filled-2/640/filled_circle-512.png"/>
            <Line src="https://www.pngall.com/wp-content/uploads/5/Vertical-Line-PNG-Images.png"/>
            <Square src="https://storage.needpix.com/rsynced_images/black-square-with-fleck-pattern.jpg" />
            </FromToIcons>
            <InputBoxes>
                <Input onChange={e => setPickup(e.target.value)} value={pickup} placeholder="Enter pickup location..."/>
                <Input onChange={e => setDropOff(e.target.value)} value={dropOff} placeholder="Where to?..." style={{marginTop: "40px"}}/>
            </InputBoxes>
            <AddIcon className="bg-gray-200 rounded-full mr-3 ml-2 h-10 w-10 p-1"/>
        </InputContainer>
        <SavedPlaces>
            <StarIcon className="bg-gray-200 text-white rounded-full mr-3 ml-2 h-10 w-10 p-1"/>Saved Places
        </SavedPlaces>
        <Link href={{
            pathname: "/confirm",
            query: {
                pickup: pickup,
                dropoff: dropOff
            }
        }}>
        <ButtonConfirm>Confirm Location</ButtonConfirm></Link>
    </Wrapper>
    </div>
  )
}

export default search;

const Wrapper = tw.div`
    bg-gray-200 h-screen flex flex-col
`
const ButtonContainer = tw.div`
    bg-white h-10 px-4 flex items-center
`
const InputContainer = tw.div`
    bg-white flex items-center mt-3
`
const FromToIcons = tw.div`
    w-10 flex flex-col m-2 py-2
`
const Circle = tw.img`
    w-10 p-1
`
const Line = tw.img`
    w-10 p-1
`
const Square = tw.img`
    w-10 p-1
`
const InputBoxes = tw.div`
    flex flex-col m-2 py-2 flex-1
`
const Input = tw.input`
    h-10 bg-gray-100 outline-none rounded-2 p-2 border-none
`
const SavedPlaces = tw.div`
    bg-white mt-3 p-2 flex items-center
`
const ButtonConfirm = tw.button`
    bg-black text-white p-2 mt-4 mx-3 transition bg hover:bg-gray-800
`