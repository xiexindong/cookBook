import React from 'react';
import memoize from 'memoize-one';

import {
    Container
  } from './StyledCookBook'
import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'

  
  const CookbookUi = (props)=>{
      const swiper = memoize(list => list.slice(0,5))
      return(
          <Container>
                <header>美食大全</header>
                <Swiper list = {swiper(props.list)}></Swiper>
                <Search
                   outerbg="#f5f5f9"
                   innerbg="#fff"
                   hasborder={true}
           
                   radius={0.06}
                   color="#ee742f"
                >

                </Search>
                <HotCate></HotCate>
          </Container>
      )
  }

  export default CookbookUi