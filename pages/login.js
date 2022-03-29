import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from '../firebase';

const login = () => {
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push('/')
            }
        })
    },[])
  return (
    <div className="containerWidth">
        <Wrapper>
        <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
        <Title>Login to access your account</Title>
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>SignIn with Google</SignInButton>
        </Wrapper>
    </div>
  )
}

export default login;

const Title = tw.div`
    px-2 text-3xl pt-4 text-gray-500 
`
const HeadImage = tw.img`
    px-3
`

const UberLogo = tw.img`
  w-20 p-2 mt-5
`
const Wrapper = tw.div`
    h-screen bg-gray-200 flex flex-col p-4
`
const SignInButton = tw.button`
    bg-black text-white p-2 mt-4 mx-3 transition bg hover:bg-gray-800 mb-3
`