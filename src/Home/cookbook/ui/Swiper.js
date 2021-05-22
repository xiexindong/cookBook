import React from 'react'
import { Carousel } from 'antd-mobile'
// import PropTypes from 'prop-types'

import {
    SwiperWrap
  } from './StyledCookBook'
  

const Swiper = (props)=>{
    const list = props.list.toJS()

    return(
        <SwiperWrap>
            <Carousel 
                autoplay={true}
                infinite
            >
            {
                list.length > 0 && list.map(value =>{
                    return(
                        <img  key={value.id} src={value.img} />
                    )
                })
            }
            </Carousel>
        </SwiperWrap>
    )

}

// Swiper.PropTypes = {
//     list: PropTypes.array
// }
export default Swiper