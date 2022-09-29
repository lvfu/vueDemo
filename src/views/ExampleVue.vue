<template>
  <div>
    <h1>{{ msg }}{{ msg2 }}</h1>

    <h3>参数的数据绑定 v-bind: 简写 :</h3>
    <input v-bind:value="msg" type="text" />
    <input type="data" :value="msg2" />

    <div>
      <h3>点击事件监听 v-on: 简写 @</h3>
      <div>
        <a>{{ num }}</a>
      </div>

      <input type="button" value="点击+" v-on:click="m1" />
      <input type="button" value="点击-" @click="m2" />
    </div>

    <div>
      <h3>双向绑定 v-model</h3>
      <p>
        <label>请输入用户名</label>
        <input v-model="username" />
      </p>
      <p>
        <label>请输入密码</label>
        <input v-model="password" />
      </p>

      <p>
        <label>性别选择</label>
        男<input type="radio" value="男" v-model="sex" /> 女<input
          type="radio"
          value="女"
          v-model="sex"
        />
      </p>

      <label>爱好</label>

      唱<input type="checkbox" value="唱" v-model="fav" /> 跳<input
        type="checkbox"
        value="跳"
        v-model="fav"
      />
      rap<input type="checkbox" value="rap" v-model="fav" />
    </div>

    <div>
      <h3>计算属性computed 带缓存 属性没变就不会走第二次</h3>

      <label>{{ fullName }}</label>
    </div>
  </div>
</template>

<script>
const options = {
  data: function () {
    return {
      msg: '学习',
      msg2: '测试',
      num: 0,
      username: '',
      password: '',
      sex: '男',
      fav: ['rap'],
    }
  },

  methods: {
    m1() {
      if (this.num >= 10) {
        return
      }
      this.num++
    },
    m2() {
      if (this.num <= 0) {
        return
      }
      this.num--
    },
  },

  computed: {
    fullName() {
      return this.msg + this.msg2
    },
  },
}

export default options
</script>
