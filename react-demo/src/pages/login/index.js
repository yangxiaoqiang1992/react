import React, { Component } from 'react'
import LoginHeader from '../../components/login/header/header'
import loginCss from '../../static/css/login/login.css'
export default class login extends Component {
  render() {
    return (
      <div className={loginCss.page}>
         <LoginHeader title='我是head标题' name='名称'></LoginHeader>
      </div>
    )
  }
  componentWillMount(){
    console.log("组件生命周期componentWillMount")
  }
  componentDidMount(){
    console.log("组件生命周期componentDidMount")
  }
}
