import { Link } from '@mui/icons-material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import tw from "tailwind-styled-components";

const search = () => {
  return (
    <div className="containerWidth">
        <Wrapper>
        <ButtonContainer>
            <Link href="/"><div style={{cursor: "pointer"}}><KeyboardBackspaceIcon style={{fontSize: "35px", color: "rgba(0,0,0,0.8)"}}/></div></Link>
        </ButtonContainer>
        <InputContainer>
            <FromToIcons>
            <Circle src="ksjdhf"/>
            <Line src="ksjdhf"/>
            <Square src="ksjdhf" />
            </FromToIcons>
        </InputContainer>
    </Wrapper>
    </div>
  )
}

export default search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
    bg-white h-10 px-4 flex items-center
`
const InputContainer = tw.div`

`
const FromToIcons = tw.div`

`
const Circle = tw.img`

`
const Line = tw.img`

`
const Square = tw.img`

`