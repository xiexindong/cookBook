import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import animate from '@h/animate'

import {
  TabBar
} from 'antd-mobile'


import cookbook from '@a/images/cookbook.png'
import cookbookActive from '@a/images/cookbook-active.png'

import menu from '@a/images/menu.png'
import menuActive from '@a/images/menu-active.png'

import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'

import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'

import { CookBook } from './cookbook/'
import { Category } from './category/'


import { actionCreator as ac } from '@/Home/category';




const Home = (props) =>{

    let dispatch = useDispatch()

    const state = useSelector(state => state)
    const [tabs, setTabs] = useState({
        selectedTab:state.getIn(['category','routeInfo','selectedTab']),
    })

    const tabItems = [
        <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
            width: '26px',
            height: '26px',
            background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
            />
        }
            selectedIcon={<div style={{
            width: '26px',
            height: '26px',
            background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
            />
        }
        selected={tabs.selectedTab === 'cookbook'}
        onPress = { ()=>setTabs({
            selectedTab:'cookbook'
        }) }
      >
        <CookBook></CookBook>
      </TabBar.Item>,
      <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={tabs.selectedTab === 'category'}
      onPress={() => {
        setTabs({
          selectedTab: 'category',
        })
        dispatch(ac.changeSelectedTab('category'))
      }}
    >

      <Category/> 
      
    </TabBar.Item>,
    ]

  return(
    <div style={{ position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 }}>
         <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          >
            {
             tabItems.map(item =>item) 
            }
        </TabBar>  
      

    </div>
  )
    
}


export default animate(Home)

