export const LOGIN_IN = 'LOGIN_IN'
export const GET_USER_INFO = 'GET_USER_INFO'

export function loginIn (isLoginIn=false){
    return {
        type:LOGIN_IN,
        isLoginIn:isLoginIn
    }
}
export function getUserInfo(){
    return {
        type:GET_USER_INFO,
        userInfo:{
            name:'',
            avator:'' 
        }
    }
}