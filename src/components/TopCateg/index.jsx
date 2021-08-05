import React from 'react'
import './TopCateg.less'
// antd carousel
import { Carousel } from 'antd';
// photos from assets

import clothes1 from '../../assets/clothes1.jpg'

// data
import { data } from './data';

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   display: 'flex',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const corouse = {
//     height: '800px',
//     width: '900px',
//     display: 'flex',
//     alignitems: 'center',
//     textAlign: 'center'
// }



export const TopCateg = () => {
    return (
        <div className='top-images00'>
            <Carousel className='top-images01' autoplay  dotPosition='top' effect='scrollx' next>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={clothes1} alt="" />
                </div>

                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={clothes1} alt="" />
                </div>

                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={clothes1} alt="" />
                </div>

                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={clothes1} alt="" />
                </div>

                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={clothes1} alt="" />
                </div>
                
            </Carousel>
        </div>
    )
}

