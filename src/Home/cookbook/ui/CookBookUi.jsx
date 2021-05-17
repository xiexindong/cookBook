import React from 'react';
import memoize from 'memoize-one';


import {
    Container
  } from './StyledCookBook'
import Swiper from './Swiper'

  
  const CookbookUi = (props)=>{
      const swiper = memoize(list =>list.slice(0,5))
      console.log('swiper',swiper)
      console.log('props',props)
      return(
          <Container>
                <header>美食大全</header>
                <Swiper list={swiper(props.list)}></Swiper>
          </Container>
      )
  }

  export default CookbookUi