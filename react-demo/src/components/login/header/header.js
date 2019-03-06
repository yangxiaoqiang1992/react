import React, { Component } from 'react'
import {Link} from "react-router-dom"
import loginCss from '../../../static/css/login/login.css'
export default class header extends Component {
  render() {
    return (
      <div className={loginCss.header}>
         <Link to="/"><img className={loginCss.logo}  src={require('../../../static/img/login/tm-logo.png')} alt="logo" /></Link>
      </div>
    )
  }
}
