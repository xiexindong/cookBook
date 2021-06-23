import React,{ useEffect, useCallback } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { ListContainer,ListWrap,SubTitle } from './StyledList';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator } from '@/Home/cookbook'



const List = (props) =>{
  const list = useSelector((state)=> state.getIn(['cookbook','list']))
  let location = useLocation();
  let history = useHistory()
  const dispatch = useDispatch()
  let state = location.state
  

  useEffect(()=>{
    if(list.toJS().length === 0){
       dispatch(actionCreator.loadDataSyncSaga())
    }
  },[dispatch, list])

  const handleGotoDetail = useCallback(
    (item) => {
      return ()=>{
        history.push("/detail",{ listTitle:location.state.title,item, from :"/list"})
      }
    },
    [location,history]
  )
  
  const handleClickLeft = useCallback(
    () => {
      history.push("/home",{ from: "/list" })
    },
    [history],
  )

  

  return<ListContainer>
     <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={handleClickLeft}
      style ={{ backgroundColor: '#ee742f'}}
      > 
      { state && state.title }
    </NavBar>
    <ul>
      {
        list.map((li,i)=>(
          <ListWrap
            width="0 0 1px 0"
            key={li.id + i}
            onClick={handleGotoDetail(li)}
          >
            <div> 
              <img src={li.img} width="115" height="75" alt=""/>
            </div>
            <div>
              <h1>{li.name}</h1>
              <SubTitle>{li.burdens}</SubTitle>
              <h3>{li.all_click}浏览 {li.favorites}收藏</h3>
            </div>
          </ListWrap>
        ))
      }
    </ul>
  </ListContainer>
}

export default List