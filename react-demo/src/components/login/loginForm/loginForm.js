import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd'
import LoginInput from '../../../components/login/loginForm/loginInput'
import loginCss from '../../../static/css/login/login.css'

export default class loginForm extends Component {
  constructor(props){
       super(props)
       this.userInput = React.createRef()
       this.psdInput = React.createRef()
       this.loginInHandler=this.loginInHandler.bind(this)
  }  
  componentDidMount(){
    
  }
  loginInHandler(){
    console.log(this.userInput.current)
    console.log(this.psdInput.current)
  }
  render() {
    return (
        <div className={loginCss.loginForm}>
              <LoginInput label="用户名" placeholder="用户名" type="text" name="user"  ref={this.userInput}/>
              <LoginInput label="密码" placeholder="密码" type="password" name="password"  clearable  ref={this.psdInput}/> 
              <Button type="primary" className={loginCss.submit} onClick={this.loginInHandler} >登录</Button>  
              <div className={loginCss.forgetPsd}>
                  <Link to="/">忘记密码</Link><Link to="/">用户注册</Link>
              </div>
        </div>
    )
  }
}
