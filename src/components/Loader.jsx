import React from 'react'
import logo from '../assets/logo.svg'
import backgroundImg from '../assets/background.jpg'
import './CssFiles/loader.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Loader = () => {

  useGSAP(() => {
    gsap.to('.loader', {
      opacity: 1,
      ease: 'expo.inOut',
      scale: 300,
      stagger: 0.25,
      duration: 3
    })
  })

  const style = {
    backgroundImage: `url${backgroundImg}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }
  return (
    <div style={style} className=''>
        <div className="loader h-[100vh] w-full bg-gray-400 z-10 flex justify-center items-center opacity-.5">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Loader