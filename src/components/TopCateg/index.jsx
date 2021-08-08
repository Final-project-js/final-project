import React from 'react'
import './TopCateg.less'
// antd carousel
import { Carousel } from 'antd';

// local photos 

import babyclothes1 from './images/babyclothes1.jpg'
import babyclothes2 from './images/babyclothes2.jpg'
import babyclothes3 from './images/babyclothes3.jpg'
import babyclothes4 from './images/babyclothes4.jpg'
import babyclothes5 from './images/babyclothes5.jpg'
import babyclothes6 from './images/babyclothes6.jpg'

import babytoy1 from './images/babytoy1.jpg'
import babytoy2 from './images/babytoy2.jpg'
import babytoy3 from './images/babytoy3.jpg'
import babytoy4 from './images/babytoy4.jpg'
import babytoy5 from './images/babytoy5.jpg'
import babytoy6 from './images/babytoy6.jpg'

import diapers1 from './images/diapers1.jpg'
import diapers2 from './images/diapers2.jpg'


export const TopCateg = () => {
    return (
        <div className='top-images00'>
            <Carousel className='top-images01' autoplay='true'  dotPosition='top'>
                {/* clothes */}
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

                {/* toys */}
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

                {/* daipers */}
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={diapers1} alt="" />
                </div>
                <div className='top-categ000'>
                    <h3 className='top-categ002'>1dgsds</h3>
                    <img className='top-categ003' src={diapers2} alt="" />
                </div>
            </Carousel>

           
        </div>
    )
}

