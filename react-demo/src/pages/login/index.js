import React, { Component } from 'react'
import LoginHeader from '../../components/login/header/header'
import Loginform from '../../components/login/loginForm/loginForm'
import loginCss from '../../static/css/login/login.css'
export default class login extends Component {
  render() {
    return (
      <div className={loginCss.page}>
         <LoginHeader />
         <div className={loginCss.content}>
            <div className={loginCss.inner}>
                <a><img src={require('../../static/img/login/ad.jpg')} alt="img"></img></a>
                <Loginform />
            </div>
         </div>
         <div className={loginCss.footer}></div>
      </div>
    )
  }
  componentWillMount(){
     
  }
  componentDidMount(){
    console.log("组件生命周期componentDidMount")
  }
}
