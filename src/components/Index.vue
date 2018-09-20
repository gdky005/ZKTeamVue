<template>
  <div>


    <el-container style="height: 1000px;">
      <el-aside width="200px">
        <h1>客户端架构组</h1>


        <a href="http://jg.int.jumei.com:9001/">
          <el-button size="mini" type="primary" round>进程管理服务</el-button>
        </a>

        <p>..............................</p>
        <p>即将添加更多服务</p>
        <p>..............................</p>
        <div style="font-size: 4px; padding: 30px">
          <p>温馨提醒: </p>
          更多功能需要你来提哦，提出不一定做，但是不提一定不做。
          <p>哈哈哈</p>
        </div>
        <p>..............................</p>

      </el-aside>
      <el-container>


        <el-main>


          <!--<h7>【更多功能需要你来提哦，提出不一定做，但是不提一定不做。哈哈哈】</h7>-->


          <h2>个推推送 辅助工具</h2>

          <p>
            <router-link to="GtPush">
              <el-button type="primary" @click="checkCid">查询 CID 是否离线</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="GTQueryMsg">
              <el-button type="primary" @click="checkCid">查询 个推 消息</el-button>
            </router-link>
          </p>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
  export default {
    name: "Index",
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
    background-color: #E9EEF3;
    color: #333;
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
