import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from "tailwind-styled-components";
import Map from '../components/map';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="containerWidth">
      <Wrapper>
      <Head>
        <title>Uber Clone</title>
        <meta name="description" content="Uber Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map/>
      <ActionItems className=''>
        {/* Header  */}
        <Header>
          <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
          <Profile>
            <Name>Mohammad Sahil</Name>
            <UserImage src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
          </Profile>
        </Header>
        {/* ActionButtons  */}
        <ActionButtons>
        <Link href="/search"><ActionButton><ActionButtonImage src="https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png"/>Ride</ActionButton></Link>
          <ActionButton><ActionButtonImage src="https://www.pngkit.com/png/full/376-3762160_vespa-primavera-piaggio-vespa-gts-125.png"/>Wheel</ActionButton>
          <ActionButton><ActionButtonImage src="https://www.freeiconspng.com/thumbs/calendar-image-png/calendar-image-png-3.png"/>Reserve</ActionButton>
        </ActionButtons>
        {/* InputButtons  */}
        <InputButtons>Where to?</InputButtons>
      </ActionItems>
    </Wrapper>
    </div> 
  )
}

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`
const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
  flex
`
const UberLogo = tw.img`
  h-8
`
const Profile = tw.div`
  flex items-center ml-auto mr-0
`
const Name = tw.div`
  mr-4 w-18 text-right text-sm 
`
const UserImage = tw.img`
  rounded-full
  h-10
`
const ActionButtons = tw.div`
  flex my-3
`
const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 p-3 flex flex-col justify-center items-center rounded-lg transform hover:scale-105 cursor-pointer transition text-lg
`
const ActionButtonImage = tw.img`
  h-12
`
const InputButtons = tw.div`
  h-20 bg-gray-200 m-1 p-4 flex items-center rounded text-xl mt-5
`