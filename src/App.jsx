import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import { Home } from './Home/'
import  { List } from './Home/list/'




function Detail(){
  return<div>Detail</div>
}


const App = (props)=>{
  return<Switch>
    <Route path="/home" children={(props)=><Home {...props}></Home>}/>
    <Route path="/list"  children={(props)=><List {...props}></List>}/>
    <Route path="/detail"  children={(props)=><Detail {...props}></Detail>}/>  
    <Redirect from="/" to="/home"/>
  </Switch>
}

export default App