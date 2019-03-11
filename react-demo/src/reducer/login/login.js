import {LOGIN_IN,GET_USER_INFO} from '../../action/login_action'
const initialState ={
    isLoginIn:false
}
export function loginIn(state,action){
   if(typeof state === 'undefined'){
      return initialState
   } 
   switch(action.type){
      case LOGIN_IN:
          return Object.assign({},action.isLoginIn,{isLoginIn:true});
        //获取用户信息，需要用到异步action
      case GET_USER_INFO:break;
      default: return state
   }
}