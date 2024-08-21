import React from 'react'
import logo from '../assets/logo.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Header() {

  useGSAP(() => {
    gsap.to('.img', {
      y: 0,
      ease: 'back.in',
      opacity: 1,
      delay: 2
    })
  })

  return (
    <> 
        <div className='header w-full h-[12vh] flex justify-center items-center '>
            <div className="img mt-10 w-50% h-full opacity-0 ">
                <img className='w- h-full object-cover overflow-hidden opacity-1' src={logo} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header