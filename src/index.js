import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App"


(()=>{
  ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    document.querySelector('#root')
  )
})()

