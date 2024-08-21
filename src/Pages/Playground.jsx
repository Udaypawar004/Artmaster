import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import backgroundImg from '../assets/background.jpg'
import '../components/CssFiles/GlassyEffect.css'
import Loader from '../components/Loader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import '../components/CssFiles/playground.css'
import { ChromePicker } from 'react-color'
import { useLocation } from 'react-router-dom'

const Playground = () => {
  const [currentColor, setCurrentColor] = useState('#ffffff');
  const location = useLocation();
  const [svgParts, setSvgParts] = useState({});
  const { src } = location.state || {};
  
  useGSAP(() => {
    gsap.to('.glassy', {
      opacity: 1,
      delay: 3
    })
  })
    
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
        }, 0)
    }, [])

    const pickerStyles = {
        default: {
            picker: {
                width: "200px",
                height: "100px",
                padding: "0",
                borderRadius: "0",
            }
        }
    };

    const handleOnChange = (color) => {
        setCurrentColor(color.hex);
    }
    
    return (
        <div style={style}>
            {/* {isLoading ? <Loader/> : ''}   */}
            <Header/>
            <div className='w-full h-[76vh] flex justify-center items-end gap-10'>
              <div className="glassy w-[40%] h-[90%] rounded-2xl flex-col opacity-1 ">
                <img className='w-full h-full object-fit overflow-hidden' src={src} alt="" />
              </div>


              <div className="glassy w-[20%] h-[90%] rounded-2xl opacity-1 flex-col justify-center items-center">
                <div className="w-full h-[55%] relative">
                  <h1 className='text-2xl flex justify-center items-center'>Color Pallete</h1>
                  <div className="glassy pb-[250px] w-[75%] h-[70%] mt-2 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><ChromePicker color={currentColor} styles={pickerStyles} onChangeComplete={handleOnChange} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%]'/></div>
                </div>
                <div className="border-t-4 rounded-full border-gray-200 opacity-20 w-[75%] absolute left-1/2 -translate-x-1/2 mt-2"></div>

                <div className="flex-col justify-center items-end ml-[6%]">
                  <h1 className='flex justify-center items-center mt-[6%] text-2xl'>Share on Social</h1>
                   <div className="social w-full h-[12rem] mt-[6%] ">
                      <div className="glassy div15 w-[80%] h-[90%] rounded-2xl -mt-[5%]"> </div>
                      <div className="glassy div16 w-[80%] h-[90%] rounded-2xl -mt-[5%]"> </div>
                      <div className="glassy div17 w-[80%] h-[90%] rounded-2xl -mt-[5%]"> </div>
                      <div className="glassy div18 w-[80%] h-[90%] rounded-2xl"> </div>
                      <div className="glassy div19 w-[80%] h-[90%] rounded-2xl"> </div>
                      <div className="glassy div20 w-[80%] h-[90%] rounded-2xl"> </div>
                    </div> 
                </div>
              </div>


              <div className="glassy w-[25%] h-[90%] rounded-2xl flex-col justify-center items-center opacity-1">
                <h1 className='flex justify-center items-center text-4xl'>Recommended</h1>
                 <div className="parents flex-col justify-center items-center ml-[3%] ">
                    <div className="glassy div11 w-[90%] h-[75%] rounded-2xl"> </div>
                    <div className="glassy div12 w-[90%] h-[75%] rounded-2xl"> </div>
                    <div className="glassy div13 w-[90%] h-[75%] rounded-2xl -mt-10"> </div>
                    <div className="glassy div14 w-[90%] h-[75%] rounded-2xl -mt-10"> </div>
                </div> 
              </div>
            </div>
        </div>
    )
}

export default Playground