import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd'
import LoginInput from '../../../components/login/loginForm/loginInput'
import loginCss from '../../../static/css/login/login.css'
import api from '../../../api/api'
import http from '../../../api/index.js'

export default class loginForm extends Component {
  constructor(props){
       super(props)
       this.user =''
       this.password=''
       this.loginInHandler=this.loginInHandler.bind(this)
       this.inputChangeHander=this.inputChangeHander.bind(this)
  }  
  componentDidMount(){
    
  }
  inputChangeHander(name,value){
     this[name] = value
     console.log(name+"/"+this[name])
  }
  loginInHandler(){
    var _this = this
    console.log({user:this.user,password:this.password})
    http.post(api.login,'post',{
      user:_this.user,
      password:_this.password
    },(res)=>{
      console.log(res.data)    
    },(error)=>{
      console.log(error) 
    })
  }
  render() {
    return (
        <div className={loginCss.loginForm}>
              {/* 方法1：react为单向数据流，但此时提交时需要获取封装的input的值，则需要反向数据操作，父组件通过value 和onChange事件传递给子组件，
                        子组件内部change时改变prop的value值
                  方法2：通过ref获取封装组件的值 */}
              <LoginInput label="用户名" placeholder="用户名" type="text" name="user" value={this.user} change={this.inputChangeHander} clearable />
              <LoginInput label="密码" placeholder="密码" type="password" name="password"  value={this.psd}  change={this.inputChangeHander} clearable  /> 
              <Button type="primary" className={loginCss.submit} onClick={this.loginInHandler} >登录</Button>  
              <div className={loginCss.forgetPsd}>
                  <Link to="/">忘记密码</Link><Link to="/">用户注册</Link>
              </div>
        </div>
    )
  }
}
