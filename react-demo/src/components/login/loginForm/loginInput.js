import React, { Component } from 'react'
import loginCss from '../../../static/css/login/login.css'
export default class loginInput extends Component {
//   constructor(props){
//       super(props)
      
//   }  
  render() {
    const {name,type,...other} = {...this.props}
    return (
      <div className={loginCss.input}>
         {other.label && <div>{other.label}</div>}
         <input  name={name} type={type} />
      </div>
    )
  }
}