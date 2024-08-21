import React from 'react'
import Header from './Header'
import Body from './Body'
import backgroundImg from '../assets/background.jpg'

import { useState, useEffect } from 'react';
import Loader from './Loader';



const Hero = () => {
    const style = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        opacity: '.8'
    }

    const [isLoading, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000)
    }, [])
    
    return (
        <div style={style}>
            {isLoading ? <Loader/> : ''} 
            <Header/>
            <Body />
        </div>
    )
}

export default Hero