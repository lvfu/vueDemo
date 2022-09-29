import axios from 'axios'

const _axios = axios.create({
  baseURL: 'http://localhost:7788',
  //cook
  withCredentials: true,
})

//6.拦截器 请求/响应
_axios.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: '111',
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  function (response) {
    //200一下走这里
    console.log('qqq')
    return response
  },
  function (error) {
    if (error.response.status == 404) {
      console.log('404接口丢失')
      return Promise.resolve(error)
    } else {
      console.log('其他错误')
      return Promise.reject(error)
    }
  }
)

export default _axios
