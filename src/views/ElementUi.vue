<template>
  <div>
    <el-input size="medium" v-model="queryData.name" placeholder="请输入姓名" />
    <el-select
      size="medium"
      placeholder="请选择性别"
      v-model="queryData.sex"
      clearable
    >
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>

    <el-select
      size="medium"
      placeholder="请选择年龄"
      v-model="queryData.age"
      clearable
    >
      <el-option label="1岁到20岁" value="1,20"></el-option>
      <el-option label="21岁到30岁" value="21,30"></el-option>
      <el-option label="31岁到40岁" value="31,40"></el-option>
      <el-option label="41岁到120岁" value="41,120"></el-option>
    </el-select>

    <el-cascader :options="menuList" size="medium"></el-cascader>

    <el-button size="medium" type="primary" @click="searchClick"
      >搜索</el-button
    >

    <el-table :data="students" style="width: 100%" stripe border>
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </el-table>

    <el-pagination
      style="margin-top: 20px"
      :total="dataNum"
      :current-page="1"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      @current-change="currentChange"
      @size-change="sizeChange"
      layout="->,prev, pager, next, jumper,sizes, total"
    />
  </div>
</template>

<script>
import axios from '../util/MyAxios.js'

const opertion = {
  data() {
    return {
      students: [],
      queryData: {
        page: 1,
        size: 5,
        name: '',
        sex: '',
        age: '',
      },
      dataNum: 0,
      menuList: [],
    }
  },

  //组件初始化会走这里
  mounted() {
    this.getStudentList()
    this.getMenuList()
  },

  methods: {
    currentChange(page) {
      this.queryData.page = page
      this.getStudentList()
    },
    sizeChange(size) {
      this.queryData.size = size
      this.getStudentList()
    },

    searchClick() {
      this.queryData.page = 1
      this.getStudentList()
    },

    async getStudentList() {
      const resp = await axios.get('api/students/q', {
        params: this.queryData,
      })
      const { list } = resp.data.data
      this.students = list
      this.dataNum = resp.data.data.total
    },

    async getMenuList() {
      const menuResp = await axios.get('api/menu')
      console.log(menuResp)

      const menuList = menuResp.data.data

      const map = new Map()

      //根据id生成map
      for (const { id, name, pid } of menuList) {
        map.set(id, { value: id, label: name, pid: pid })
      }

      const showMenu = []
      //把map里 value.pid = key 放 key 对应value 的child数组中
      for (const obj of map.values()) {
        const data = map.get(obj.pid)
        if (data != undefined) {
          data.children ??= []
          data.children.push(obj)
        } else {
          showMenu.push(obj)
        }
      }

      this.menuList = showMenu
    },
  },
}

export default opertion
</script>

<style scoped>
.el-select--medium,
.el-cascader--medium,
.el-input--medium {
  margin: 10px 10px 10px 0px;
  width: 200px;
}

.el-button--medium {
  margin: 10px 10px 10px 0px;
  width: 80px;
}
</style>
