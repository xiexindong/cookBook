import React from 'react'
import PropTypes from 'prop-types'
import {
  MenuWrap
} from './StyledMenuList'


const MenuList = (props) =>{
  let { cata,onAsideClick,curCate} = props
   return<MenuWrap
      width="1px 0 0 0"
   >
    <aside>
      <ul>
        {
          cata && Object.keys(cata).map(value =>{
            return<li
                className = {curCate == value ? 'active' :''}
                key={value}
                onClick = { onAsideClick(value)}
              >
               <span>{value}</span>
            </li>
          })
        }
      </ul>     
    </aside>
    <section>
      <ul>
        {
          cata && curCate && cata[curCate].map(value =>{
            return<li
              key = {value}
            >
              {value}
            </li>
          })
        }
      </ul>
    </section>
     

   </MenuWrap>
}

export default MenuList