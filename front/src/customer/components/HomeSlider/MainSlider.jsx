import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainSliderData } from './MainSliderData';



const MainSlider = () => {

    const items = mainSliderData.map((item) => <img className='cursor-pointer'
    role='presentation' src={item.image} alt=""/>)

    return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
    />  
    )
}
export default MainSlider;