import React from 'react';
import useCateChange from './useCateChange';
import MenuList from '@c/menu/MenuList'
import useGotoList from './useGotoList';

const Menu = (props) =>{
  
  let { cata, cateType, handleAsideClick,cateAside} = useCateChange()
  const { handleGoToList } = useGotoList()
  
 

  return<div>
      <MenuList
        cata = {cata && cata[cateType]}
        onAsideClick = { handleAsideClick }
        curCate={cateAside}
        type= {cateType}
        onGotoList = { handleGoToList }
      >
      </MenuList>
  </div>
}

export default Menu