import React from 'react';
import memoize from 'memoize-one';

import {
    Container
  } from './StyledCookBook'
import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10';

  
  const CookbookUi = (props)=>{
      const swiper = memoize(list => list.slice(0,5))
      const hostCate = memoize(list => list.slice(0,10))


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
                <Top10 list = {hostCate(props.list)} useGotoDetail = { props.useGotoDetail}></Top10>
          </Container>
      )
  }

  export default CookbookUi