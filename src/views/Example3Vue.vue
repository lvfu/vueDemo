<template>
  <div class="parent">
    <h1>数据渲染</h1>
    <input type="button" value="测试点击拉取数据" @click="getData" />

    <div class="student_group">
      <div class="student_title">学生列表</div>
      <div class="student_menu">
        <div class="student_m_id">编号</div>
        <div class="student_m_id">姓名</div>
        <div class="student_m_id">性别</div>
        <div class="student_m_id">年龄</div>
      </div>

      <div class="student_menu" v-for="s of students" :key="s.id">
        <div class="student_m_id">{{ s.id }}</div>
        <div class="student_m_id">{{ s.name }}</div>
        <div class="student_m_id">{{ s.sex }}</div>
        <div class="student_m_id">{{ s.age }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../util/MyAxios.js'

const options = {
  mounted: function () {
    this.getData()
  },
  data: function () {
    return { students: [] }
  },
  methods: {
    async getData() {
      //封装axios工具
      const resp = await axios.get('api/students')

      const list = resp.data.data

      this.students = list
    },
  },
}

export default options
</script>

<style lang="less" scoped>
.parent {
}

.student_group {
  margin-left: 20%;
  width: 60vw;
  display: flex;
  flex-direction: column;

  .student_title {
    width: 100%;
    font-size: 30px;
    text-align: center;
  }

  .student_menu {
    margin-top: 20px;
    display: flex;
    background: #f5f5f5;
    padding: 10px;
    .student_m_id {
      flex: 1;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>
