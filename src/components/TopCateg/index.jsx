import React from 'react'
import './TopCateg.less'
// antd carousel
import { Carousel } from 'antd';
// photos from assets
import diaper1 from '../Products/images/diaper.jpg'
import babyclothes1 from './images/babyclothes1.jpg'
import babyclothes2 from './images/babyclothes2.jpg'
import babyclothes3 from './images/babyclothes3.jpg'
import babyclothes4 from './images/babyclothes4.jpg'
import babyclothes5 from './images/babyclothes5.jpg'
import babyclothes6 from './images/babyclothes6.jpg'
import babytoy1 from './images/babytoy1.jpg'
import diapers1 from './images/diapers1.jpg'



export const TopCateg = () => {
    return (
        <div className='top-images00'>
            <Carousel className='top-images01' autoplay  dotPosition='top' effect='scrollx' next>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babyclothes1} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babyclothes2} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babyclothes3} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babyclothes4} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babyclothes5} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babyclothes6} alt="" />
                </div>


                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babytoy1} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babytoy2} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babytoy3} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babytoy4} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babytoy5} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={babytoy6} alt="" />
                </div>


                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={diapers1} alt="" />
                </div>

                
            </Carousel>
        </div>
    )
}

