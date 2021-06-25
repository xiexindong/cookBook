import React from 'react';

import {
  CategoryWrap,
  NavUl,
} from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'



const CategoryUi = (props) =>{
  let { type,onCategoryUiClick } = props
  return<CategoryWrap>
      <nav>
        <NavUl
          color="#fff"
          radius={0.15}
        >
          <li
            className = {type == 'category' ? 'active' : '' }
            onClick = { onCategoryUiClick('category')}
          >分类</li>
          <li
             className={type === 'material' ? 'active' : ''}
             onClick = { onCategoryUiClick('material')}
          >食材</li>
         <li className={type === 'category' ? 'slide' : 'slide right'}></li>
        </NavUl>
      </nav>
      <Search
        outerbg="#fff"
        innerbg="#efefef"
        hasborder={false}
        radius={0.06}
      ></Search>
      <Menu
        type = { type }
      >
      </Menu>
  </CategoryWrap>
}

export default CategoryUi