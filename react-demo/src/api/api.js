import config from './config'

const baseUrl = '/api/v'+config.appVerson
const api ={
    login:baseUrl+'/login'
}
export default api

