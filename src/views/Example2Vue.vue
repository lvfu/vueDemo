<template>
  <div>
    <h1>axios网络请求示例</h1>
    <input type="button" value="测试点击拉取数据" @click="getData" />
  </div>
</template>

<script>
import axios from '../util/MyAxios.js'

const options = {
  data: function () {
    return {}
  },

  methods: {
    async getData() {
      //1 get/post
      // const data = await axi.get('api/students')

      //2 带参数得请求 ?aaa=xxx&b=xxx
      // const data = await axi.post(
      //   'api/a4',
      //   {},
      //   {
      //     headers: {
      //       Authorization: '111',
      //     },
      //     params: {
      //       name: 'zhangsan',
      //       age: 11,
      //     },
      //   }
      // )

      //3.表单格式 urlencoded'   muiltPart 等只是传的对象不太一样
      // const parames = new URLSearchParams()
      // parames.append('name', 'zhangsan')
      // parames.append('age', 18)
      // const data = await axi.post('api/a4', parames)

      //4.自己创建axios  并配置config
      // const _axios = axios.create({
      //   baseURL: 'http://localhost:7788',
      //   withCredentials: true,
      // })

      // await _axios.post('api/a6set', {})

      //5 异常捕获
      // try {
      //   const data = await _axios.post('api/a6get1', {})
      //   console.log(data)
      // } catch (e) {
      //   console.log(e.response)
      // }

      // //6.拦截器 请求/响应
      // _axios.interceptors.request.use(
      //   function (config) {
      //     config.headers = {
      //       Authorization: '111',
      //     }
      //     return config
      //   },
      //   function (error) {
      //     return Promise.reject(error)
      //   }
      // )

      // _axios.interceptors.response.use(
      //   function (response) {
      //     //200一下走这里
      //     return response
      //   },
      //   function (error) {
      //     if (error.response.status == 404) {
      //       console.log('404接口丢失')
      //       return Promise.resolve(error)
      //     } else {
      //       console.log('其他错误')
      //       return Promise.reject(error)
      //     }
      //   }
      // )

      //封装axios工具
      const data = await axios.get('api/students')
      console.log(data)
    },
  },
}

export default options
</script>
