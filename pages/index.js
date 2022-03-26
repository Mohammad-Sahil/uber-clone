import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from "tailwind-styled-components";
import Map from '../components/map';

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Uber Clone</title>
        <meta name="description" content="Uber Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map/>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`
const ActionItems = tw.div`
  bg-red-500
  flex-1
`