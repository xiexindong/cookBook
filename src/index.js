import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/'

import App from "./App"
import './assets/styles/reset.css'


(()=>{
  ReactDOM.render(
    <Provider store={store}> 
        <Router>
          <App/>
        </Router>
    </Provider>, 
    document.querySelector('#root')
  )
})()

