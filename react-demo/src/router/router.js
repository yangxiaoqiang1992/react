import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom"
import Home from '../pages/home'
import Login from '../pages/login'

export default ()=>(
    <BrowserRouter >
       <Switch>
           <Route exact path="/" component={Home}></Route>
           <Route path="/login" component={Login} ></Route>
       </Switch>
    </BrowserRouter>
)

