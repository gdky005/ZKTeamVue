<template>
  <div tyle="margin-top: 60px;text-align: center;">


    <el-container style="height: 1000px;">
      <el-aside width="20%">
        <h1>卓客 Team</h1>

        <p><a href="http://zkteam.cc/#/About" target="view_window">
          关于 Me
        </a></p>

        <hr style="height:1px;border:none;border-top:1px dashed #0066CC; margin-left: 50px; margin-right: 50px"/>

        <p><a href="http://zkteam.cc:9001/" target="view_window">
          <el-button size="mini" type="primary" round>进程管理服务</el-button>
        </a></p>

        <p><a href="http://rap2.gdky005.com" target="view_window">
          <el-button size="mini" type="primary" round>Rap2 接口服务</el-button>
        </a></p>

        <p><a href="http://gdky005.com:8001" target="view_window">
          <el-button size="mini" type="primary" round>rap2-delos 服务首页地址</el-button>
        </a></p>

        <p><a href="http://zkteam.cc:8081" target="view_window">
          <el-button size="mini" type="primary" round>NodeJS 代理服务</el-button>
        </a></p>
        <p>
          <a href="http://zkteam.cc:8081/WQ" target="view_window">
            <el-button size="mini" type="primary" round>NodeJS 代理服务 WQ</el-button>
          </a>
        </p>

        <p>............................................................</p>
        <p>即将添加更多服务</p>
        <p>............................................................</p>

        <p>
          <a href="https://www.zkteam.cc/#/WXMoney" target="view_window">
            <el-button size="mini" type="primary" round>微信零钱设置</el-button>
          </a>
        </p>

        <p>............................................................</p>

        <p>WXQB</p>
        <p>
          <a href="https://www.zkteam.cc/WXMoney/qb" target="view_window">
            <el-button size="mini" type="primary" round>我的零钱</el-button>
          </a>
        </p>

        <p>
          <a href="https://www.zkteam.cc/WXMoney/lqMX" target="view_window">
            <el-button size="mini" type="primary" round>零钱明细</el-button>
          </a>
        </p>

        <p>
          <a href="https://www.zkteam.cc/WXMoney/setQB?id=1&name=%E6%88%91%E7%9A%84%E9%9B%B6%E9%92%B1&money=58" target="view_window">
            <el-button size="mini" type="primary" round>设置 我的零钱</el-button>
          </a>
        </p>

        <p>
          <a href="https://www.zkteam.cc/WXMoney/setLQMXPZ?id=1&name=扫码支付&money=58&startTime=1540109304418&endTime=1540209304418&startMoney=5&endMoney=12&spendState=1" target="view_window">
            <el-button size="mini" type="primary" round>设置 零钱明细</el-button>
          </a>
        </p>

        <p>
          <a href="https://www.zkteam.cc/WXMoney/lqmxPZ" target="view_window">
            <el-button size="mini" type="primary" round>查看 零钱明细设置</el-button>
          </a>
        </p>



        <p>............................................................</p>

        <div style="font-size: 4px; padding: 30px">
          <p>温馨提醒: </p>
          更多功能需要你来提哦，提出不一定做，但是不提一定不做。哈哈哈
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
