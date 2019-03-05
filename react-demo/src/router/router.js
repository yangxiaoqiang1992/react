import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom"
import Home from '../pages/home'
import Login from '../pages/login'

export default ()=>(
    <BrowserRouter >
       <Switch>
           <Route path="/" component={Home}/>
           <Route path="/login" component={Login} ></Route>
       </Switch>
    </BrowserRouter>
)

