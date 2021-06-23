import React, { useCallback }  from 'react'
import animate from '@h/animate'
import { useLocation, useHistory } from 'react-router-dom'
import {
  DetailWrap
} from './StyledDetail'

import { NavBar, Icon } from 'antd-mobile'

const Detail = (props)=>{
  const location = useLocation()
  const history = useHistory()
  
  let state = location.state

  const handleClickLeft = useCallback(()=>{
    let { from, item ,listTitle} = state

    history.push(from,{ title:listTitle, from :'/detail'})

  },[location,history])
  return(
    <DetailWrap>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={handleClickLeft}
          style={{backgroundColor: '#ee742f' }}
        >
          {state && state.item.name}
        </NavBar>
        <div>
          <div>
            <img src={state.item.img} alt=""/>
          </div>
          <div className="details">
            <h1>{state && state.item.name}</h1>
            <h3>23567浏览 9560收藏</h3>
            <button>收藏</button>
          </div>
        </div>
    </DetailWrap>
  )
}

export default animate(Detail)