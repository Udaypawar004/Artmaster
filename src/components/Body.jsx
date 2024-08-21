import React, {useState} from 'react'
import './CssFiles/GlassyEffect.css'
import CssGrid from './CssGrid'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Body = () => {
  const [onHero, setOnHero] = useState(true);

  useGSAP(() => {
    gsap.to('.glassy', {
      opacity: 1, 
      delay: 3
    })
    gsap.to('.head', {
      opacity: 1,
      stagger: .25,
      ease: 'bounce.in',
      delay: 3
    })
  })
  return ( onHero &&
    <div className='w-full h-[76vh] flex justify-center items-end'>
        <div className='glassy w-[85%] h-[90%] rounded-2xl flex-col opacity-0'>
            <div className="ml-10 mb-5 flex">
              <h1 className='head font-medium text-2xl opacity-0'>C</h1>
              <h1 className='head font-medium text-2xl opacity-0'>a</h1>
              <h1 className='head font-medium text-2xl opacity-0'>t</h1>
              <h1 className='head font-medium text-2xl opacity-0'>e</h1>
              <h1 className='head font-medium text-2xl opacity-0'>g</h1>
              <h1 className='head font-medium text-2xl opacity-0'>o</h1>
              <h1 className='head font-medium text-2xl opacity-0'>r</h1>
              <h1 className='head font-medium text-2xl opacity-0'>y</h1>
            </div>
            <div className="w-full h-[90%]"><CssGrid /></div>
        </div>
    </div>
  )
}

export default Body