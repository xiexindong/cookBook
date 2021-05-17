import React from 'react'
import { Carousel } from 'antd-mobile'
import {
    SwiperWrap
  } from './StyledCookBook'
  

const Swiper = (props)=>{
    const list = props.list.toJs()
    console.log(list)

    return(
        <SwiperWrap>
            <Carousel 
                autoplay={true}
                infinite
            >
            {
                list.length > 0 && list.map(value =>{
                    return(
                        <img src={value.img} />
                    )
                })
            }
            </Carousel>
        </SwiperWrap>
    )

}

export default Swiper