<template>
  <div>
    <el-container>
      <el-header>
        <el-button type="primary" @click="jump('/l/p1')">P1</el-button>
        <el-button type="primary" @click="jump('/l/p2')">P2</el-button>
        <el-button type="primary" @click="jump('/l/p3')">P3</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <router-link to="/l/p1">P1</router-link>
          <router-link to="/l/p2">P2</router-link>
          <router-link to="/l/p3">P3</router-link>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
const options = {
  methods: {
    jump(url) {
      this.$router.push(url)
    },
  },
}

export default options
</script>

<style lang="less" scoped>
div {
  margin: auto;
  height: 95%;
  width: 95%;
  color: white;

  .el-container {
    height: 100%;

    .el-header {
      background-color: aqua;
    }

    .el-aside {
      padding: 20px 10px;
      background-color: cadetblue;
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        display: block;
        margin: 10px 10px 0 10px;
        padding: 5px;
        font-size: 15px;
        text-align: center;
      }

      .router-link-active {
        color: #fff;
        background-color: aqua;
        text-align: center;
      }
    }

    .el-main {
      padding: 0;
      background-color: cornflowerblue;
    }
  }
}
</style>
