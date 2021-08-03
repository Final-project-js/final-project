import React from 'react'
import 'TopCateg.less'
// slider imports 
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const TopCateg = () => {
    return (
        <div>
            <Splide>
                <SplideSlide>
                    <img src="image1.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="image2.jpg" alt="Image 2"/>
                </SplideSlide>
            </Splide>
        </div>
    )
}
