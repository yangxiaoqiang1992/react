import React, { Component } from 'react'
import loginCss from '../../../static/css/login/login.css'
export default class header extends Component {
  render() {
    return (
      <div className={loginCss.header}>
         <a><img className={loginCss.logo}  src={require('../../../static/img/login/tm-logo.png')} alt="logo" /></a>
      </div>
    )
  }
}
