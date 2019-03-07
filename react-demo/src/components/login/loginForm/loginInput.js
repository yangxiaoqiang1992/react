import React, { Component } from 'react'
import loginCss from '../../../static/css/login/login.css'
export default class loginInput extends Component {
  constructor(props){
      super(props)
      this.state={
         value:''
      }
  }  
  changeHandler(e){
    this.setState({
        value:e.target.value
    })
  }
  clearHander(e){
    this.setState({
       value:''
    })
  }
  render() {
    const {name,type,...other} = {...this.props}
    return (
      <div className={loginCss.input}>
         {other.label && <div className={loginCss.label}>{other.label}</div>}
         <div className={loginCss.inputBox}>
            <input  name={name} type={type}  value={this.state.value}  placeholder={other.placeholder ? other.placeholder :''} onChange={(e)=>this.changeHandler(e)} />
            {other.clearable && this.state.value.length>0 && <span className={loginCss.clear}  onClick={(e)=>this.clearHander(e)}></span>}
         </div>
      </div>
    )
  }
}