//axios 基础封装 
import axios from 'axios'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',//基地址
    timeout: 5000//超时时间
})
//拦截器配置

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))


//axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance