import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Uber Clone</title>
        <meta name="description" content="Uber Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map>Sahil</Map>
      <ActionItems>Sahil2</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`

const Map = tw.div`
  bg-red-200
  flex-1
`

const ActionItems = tw.div`
  bg-red-500
  flex-1
`