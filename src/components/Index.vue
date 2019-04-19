<template>
  <div tyle="margin-top: 60px;text-align: center;">


    <el-container style="height: 1000px;">
      <el-aside width="300px">

        <img src="../assets/logo.png"/>

        <h1>好未来移动组</h1>

        <hr style="height:1px;border:none;border-top:1px dashed #0066CC; margin-left: 50px; margin-right: 50px"/>
        <p>即将添加更多服务</p>

        <p>............................................................</p>

        <div style="font-size: 4px; padding: 30px">
          <p>温馨提醒: </p>
          更多功能需要你来提哦
        </div>

      </el-aside>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Home from "./Home";

  export default {
    name: "Index",
    components: {Home},
    data() {
      return {
        resultStatus: false,
        cid: '',
        data: [{
          'result': '',
          'taskId': '',
        }]
      }
    },
    methods: {}
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 30px;
    /*height: 300px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    /*line-height: 200px;*/
    padding-top: 60px;
  }

  .el-main, .el-container {
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  /*body > .el-container {*/
  /*!*margin-bottom: 40px;*!*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
  /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
  /*line-height: 320px;*/
  /*}*/
</style>
