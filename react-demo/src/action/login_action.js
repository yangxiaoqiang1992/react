import http from '../api/index'
import api from '../api/api'

export const LOGIN_IN = 'LOGIN_IN'
export const GET_USER_INFO = 'GET_USER_INFO'

export function loginIn (isLoginIn=false){
    return {
        type:LOGIN_IN,
        isLoginIn:isLoginIn
    }
}
export function getUserInfo(){
    // return {
    //     type:GET_USER_INFO,
    //     userInfo:{
    //         name:'',
    //         avator:'' 
    //     }
    // }
    return function(dispatch){
        debugger
       return http.get(api.getUserInfo,'get',{
           user:'111'
       },(res)=>{
           console.log(res.data.data)
       },(error)=>{
         console.log(error) 
       })
    } 
}