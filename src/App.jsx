import React, {Component} from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

function Home(props){
  return<div>home</div>
}

function List(){
  return<div>List</div>
}


function Detail(){
  return<div>Detail</div>
}


const App = (props)=>{
  console.log(props)
  return<Switch>
    <Route path="/home" children={(props)=><Home {...props}></Home>}/>
    <Route path="/list"  children={(props)=><List {...props}></List>}/>
    <Route path="/detail"  children={(props)=><Detail {...props}></Detail>}/>  
    <Redirect from="/" to="/home"/>
  </Switch>
}

export default App