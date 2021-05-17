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
// import { Category } from './category/'
// import { More } from './more/'
// import Map from './map/Map'


const Home = (props) =>{
    const state = useSelector(state => state)
    console.log('state',state.toJs())
    const [tabs, setTabs] = useState({
        selectedTab:state.getIn(['category']),
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
        
    ]
    
}

