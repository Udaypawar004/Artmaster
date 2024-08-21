import React, { useState } from 'react'
import './CssFiles/CssGrid.css'
import Animal from '../assets/samples/animal.svg' 
import butterfly from '../assets/samples/butterfly.svg' 
import car from '../assets/samples/car.svg' 
import doremon from '../assets/samples/cartoon.svg' 
import flower from '../assets/samples/flower.svg' 
import Fruit from '../assets/samples/fruit.svg' 
import { useNavigate } from 'react-router-dom'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CssGrid = () => {

  useGSAP(() => {
    gsap.to('.image' , {
      stagger: 0.25,
      opacity: 1,
      delay: 4
    })
  })

    const navigate = useNavigate(); 

    const handleNavigation = (route, data) => {
    navigate(route, { state: data });
  };

    return (
      <div className="parent overflow-hidden ">
          <div onClick={() => handleNavigation('/playground', { src: flower})} className="box div3 rounded-2xl"> <img className='image w-full h-full object-fill overflow-hidden rounded-2xl opacity-0' src={flower} alt="flower category" /> </div>
          <div onClick={() => handleNavigation('/playground', { src: Animal })} className="box div1 rounded-2xl "> <img className='image w-full h-full object-fill overflow-hidden rounded-2xl opacity-0' src={Animal} alt="animal category" /> </div>
          <div onClick={() => handleNavigation('/playground', { src: doremon })} className="box div2 rounded-2xl "> <img className='image w-full h-full object-fill overflow-hidden rounded-2xl opacity-0' src={doremon} alt="cartoon category" /> </div>
          <div onClick={() => handleNavigation('/playground', { src: Fruit })} className="box div4 rounded-2xl "> <img className='image w-full h-full object-fill overflow-hidden rounded-2xl opacity-0' src={Fruit} alt="fruit category" /> </div>
          <div onClick={() => handleNavigation('/playground', { src: butterfly })} className="box div5 rounded-2xl "> <img className='image w-full h-full object-fill overflow-hidden rounded-2xl opacity-0' src={butterfly} alt="birds category" /> </div>
          <div onClick={() => handleNavigation('/playground', { src: car })} className="box div6 rounded-2xl "> <img className='image w-full h-full object-fill overflow-hidden rounded-2xl opacity-0' src={car} alt="car category" /> </div>
      </div> 
    )
  }

export default CssGrid