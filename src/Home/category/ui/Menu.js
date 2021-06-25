import React from 'react';
import useCateChange from './useCateChange';
import MenuList from '@c/menu/MenuList'


const Menu = (props) =>{
  
  let { cata, cateType, handleAsideClick,cateAside} = useCateChange()
 

  return<div>
      <MenuList
        cata = {cata && cata[cateType]}
        onAsideClick = { handleAsideClick }
        curCate={cateAside}
        type= {cateType}
      >
      </MenuList>
  </div>
}

export default Menu