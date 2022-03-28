import Link from 'next/link';
import tw from "tailwind-styled-components";
import Map from '../components/map';

const Confirm = () => {
  return (
    <div className="containerWidth">
    <Wrapper>
        <Map/>
    </Wrapper>
    </div>
  )
}

export default Confirm;

const Wrapper = tw.div`
    
`

