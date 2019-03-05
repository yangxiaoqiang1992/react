import React, { Component } from 'react'
import LoginHeader from './header/header'
import loginCss from '../../static/css/login/login.css'
export default class login extends Component {
  render() {
    return (
      <div className="{loginCss.page}">
         <LoginHeader />
      </div>
    )
  }
}
