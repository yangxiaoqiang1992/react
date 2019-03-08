import axios from "axios"
import {notification} from 'antd'
//请求拦截器
axios.interceptors.request.use(config=>{
    return config
},(error=>{
   return Promise.reject(error) 
}))
//响应拦截
axios.interceptors.response.use(response=>{
    let status = response.data.status
    if(status && status ==='200'){
       return response
    }
    //判断登录状态，取session或token,如已登录，则跳转到之前浏览页面，如上次浏览为空，跳转到首页，否则跳转到登录页
},(error)=>{
    // notification.open({
    //     message:"服务器响应失败",
    //     description:error
    // })
    return Promise.reject(error)
})
function apiAxios (url,method,params,success,failure){
    return axios({
        url:url,
        method:method,
        data: method === 'post' || method === 'put' || method === 'patch' || method === 'delete' ? params : null,
        params: method === 'get' ? params : null     
    }).then((response)=>{
        success(response)
    }).catch((error)=>{
        failure(error)
    })
}
export default {
   get(url,method,params,success,failure){
       return apiAxios(url,'get',params,success,failure)
   },
   post(url,method,params,success,failure){
    return apiAxios(url,'post',params,success,failure)
   }
}