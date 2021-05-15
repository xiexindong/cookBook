import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/'

// import App from "./App"


(()=>{
  ReactDOM.render(
    <Provider store={store}>
        <Router>
         2222
        </Router>
    </Provider>, 
    document.querySelector('#root')
  )
})()

