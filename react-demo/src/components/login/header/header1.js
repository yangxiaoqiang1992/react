import React, { Component } from 'react'

function NewComponent(props){
    function clickEvent(e){
      e.stopPropagation()
       alert("点击函数是组件")  
    }
    return (
      <div onClick={clickEvent} >这是一个函数组件</div>
    )
}
export default class header extends Component {
  constructor(props){
     super(props)
     this.handleClick=this.handleClick.bind(this)
     this.dom = React.createRef()
     this.state ={input:''}
  }
  handleClick(e){
    alert(this)
  }
  changeHandler = (e) =>{
    console.log(e)
    this.setState({
      input: e.target.value
    }) 
  }
  render() {
    const props = this.props
    const style = {
      background:'#ddd',
      fontSize:18
    }
    const list =[{name:'1',value:"11"},{name:'22',value:"23"},{name:'34',value:"35"}]
    return (
      <div className="tm-login-header" {...props}   style={style} ref={this.dom}>
           <input onChange={this.changeHandler} placeholder="请输入"/>{this.state.input}
           {
             list.map((item,index) =>
              <div key={item.name}>{item.name}:{item.value}</div>
            )
           }  
           {list.length >1 && <NewComponent />}
      </div>
    )
  }
  componentWillMount(){
    console.log("子组件生命周期componentWillMount")
  }
  componentDidMount(){
    console.log(this.dom.current)
    console.log("子组件生命周期componentDidMount")
  }
}
