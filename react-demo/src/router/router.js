import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom"
import Home from '../components/home/home'
import Login from '../components/login/login'

export default ()=>(

    <BrowserRouter >
       <Switch>
           <Route path="/home" component={Home} ></Route>
           <Route path="/login" component={Login} ></Route>
       </Switch>
    </BrowserRouter>
)

