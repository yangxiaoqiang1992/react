import React, { Component } from 'react'
import LoginHeader from '../../components/login/header/header'
import Loginform from '../../components/login/loginForm/loginForm'
import loginCss from '../../static/css/login/login.css'
export default class login extends Component {
  constructor(props){
     super(props)
     this.state={
       num:0
     }
  }
  render() {
    const name ="@coryright/yangxiaoqiang"
    const count = this.state.num
    const colors = ['#902223','#345663','#744667']
    const style = {
        color:colors[count]
    }
    return (
      <div className={loginCss.page}>
         <LoginHeader />
         <div className={loginCss.content}>
            <div className={loginCss.inner}>
                {/* <a><img src={require('../../static/img/login/ad.jpg')} alt="img" className={ad}></img></a> */}
                <Loginform />
            </div>
         </div>
         <div className={loginCss.footer}><div style={style}>{name}</div></div>
      </div>
    )
  }
  componentDidUpdate(){

  }
  componentWillMount(){
     
  }
  componentDidMount(){
    var _this = this
    setInterval(function(){
      if(_this.state.num !== 2){
         _this.setState({num:_this.state.num+1})
      }else{
         _this.setState({num:0})
      }
     
    },3000)
    console.log("组件生命周期componentDidMount")
  }
}
