import React, { useCallback, useEffect, useState } from "react"
import { useSelector,useDispatch } from 'react-redux';
import { actionCreator as ac } from '@/Home/category';
import { get } from '@u/http';
const useCateChange = () =>{
  const dispatch = useDispatch()
  const [cata, setCate] = useState(null)
  const cateAside = useSelector(state => state.getIn(['category','routeInfo','cateAside']))
  const cateType = useSelector(state => state.getIn(['category','routeInfo','cateType']))
  
  useEffect(()=>{
     (async () => {
       let result = await get({
        url: '../mock/cookbook-category.json'
       })
       setCate(result.data.data)

       if(cateAside == ''){ // 初始化默认值
          dispatch(ac.changeCateAside(cateType == 'category' ? '热门' : '肉类' ))
       }
     })()
  },[])

  const handleAsideClick = useCallback((curcate)=>{
      return () =>{
        dispatch(ac.changeCateAside(curcate))
      }
    },
  [dispatch])
  
  return {
    cateType,
    cata,
    cateAside,
    handleAsideClick
  }
}


export default useCateChange
