import {connect} from 'react-redux'
import {loginIn} from '../../action/login_action'
import loginFrom from '../../components/login/loginForm/loginForm'

const mapStateToProps = state => {
    console.log(state)
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatchLoginIn:()=>{
            dispatch(loginIn(true))
        }
    }
  }
const loginFormContainer=connect(mapStateToProps,mapDispatchToProps)(loginFrom)
export default loginFormContainer


