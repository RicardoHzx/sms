import axios from 'axios'
import {message} from 'antd'
import qs from 'qs';

axios.defaults.baseURL='http://127.0.0.1:7979';
// 配置令牌
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 过滤器
// axios.defaults.transformRequest=[function(data,headers){
//     return qs.stringify(data);
// }]

//请求拦截器，在请求发送之前进行拦截，作用是改变一些配置信息，参数
axios.interceptors.request.use(function(config){
    if(config.method=='post'){
        config.data=qs.stringify(config.data)
    }
    //返回配置信息
    return config;
})

axios.interceptors.response.use(function(response){
    
    let {data}=response;
    response.status=data.status;
    response.statusText=data.message;
    response.data=data.data;

    return response;
},function(error){
    message.error('服务器异常');
})

export default axios;
  