<template>
  <div>
    <div style="margin-top: 60px;text-align: center;">

      <h1>个推推送</h1>

      <el-dropdown @command="handleCommand">
        <el-button size="medium" split-button round type="warning" style="width: 120px">
          {{ env }}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="0">测试环境</el-dropdown-item>
          <el-dropdown-item command="1">ST 环境</el-dropdown-item>
          <el-dropdown-item command="2">正式环境</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

     <!--<span style="text-align: center; font-size: 50px">个推推送</span>-->

      <!--<el-dropdown @command="handleCommand">-->
        <!--<el-button size="medium" split-button round type="warning" style="width: 120px">-->
          <!--{{ env }}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</el-button>-->
        <!--<el-dropdown-menu slot="dropdown">-->
          <!--<el-dropdown-item command="0">测试环境</el-dropdown-item>-->
          <!--<el-dropdown-item command="1">ST 环境</el-dropdown-item>-->
          <!--<el-dropdown-item command="2">正式环境</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->







    </div>

    <div style="margin: 50px; text-align: center">

      <el-input v-model="cid" placeholder="请输入个推 cid" clearable></el-input>
      <p>


        <el-button type="primary" icon="el-icon-search" @click="checkCid">查询 CID 是否离线</el-button>
      </p>

      <p style="text-align: left">

        <el-table
          border
          v-show="resultStatus"
          :data="data"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="taskId"
            label="任务 ID"></el-table-column>
          <el-table-column
            prop="result"
            label="结果"></el-table-column>
        </el-table>
      </p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GTPush",
    data() {
      return {
        url: 'http://192.168.17.16:8888',
        envs: [
          '测试环境',
          'ST 环境',
          '正式环境',
        ],
        env: '测试环境',
        resultStatus: false,
        cid: 'OSA-0918_J6GAWuPXoR6ARVWdYtdY14',
        data: [{
          'result': '',
          'taskId': '',
        }]
      }
    },
    methods: {
      handleCommand(command) {
        this.env = this.envs[command];

        if (command === '0') {
          this.url = 'http://192.168.17.16:8888';
        } else {
          this.url = 'http://bjtest-push.gateway.int.jumei.com';
        }

        this.$message({
          showClose: true,
          message: '当前已经切换至： ' + this.env,
          type: 'warning'
        });
      },

      checkCid() {
        var that = this;
        $.ajax({
          url: this.url + '/query.php?cid=' + this.cid,
          type: 'GET',
          dataType: 'jsonp',
          jsonpCallback:'cidResult',
          success: function (res) {
            console.log(res);
            that.resultCallBackForCheckCid(res);
          },
          error: function (res) {
            console.log(res);
            that.resultCallBackForCheckCid(res);
          },
        })

      },
      // 请求返回成功后的处理方式
      resultCallBackForCheckCid(obj) {
        let resultData = obj;
        this.data = resultData;

        if (resultData.length > 0) {
          this.$notify({
            title: '成功',
            message: "请求成功！",
            type: 'success'
          });

          for (let i = 0; i < resultData.length; i++) {
            let d = resultData[i];
            console.log("当前 data: " + d["result"] + ", taskId:" + d["taskId"])
          }

          this.resultStatus = true;
        } else {
          this.$notify({
            title: '失败',
            message: "请输入 cid 或者请求错误！",
            type: 'error'
          });
        }


        // console.log("当前 data: " + this.data)


        // if (resultData.code !== 0) {
        //   objs = resultData;
        //   objs.message = resultData.result;
        // } else {
        //   objs = obj.result;
        // }
        //
        // let code = objs['code'];
        // let message = objs['message'];
        //
        // console.log(code + "," + message);
        //
        // if (code === 0) {
        //   that.$notify({
        //     title: '成功',
        //     message: "消息：",
        //     type: 'success'
        //   });
        // } else {
        //   that.$notify({
        //     title: '失败',
        //     message: "错误：",
        //     type: 'error'
        //   });
        // }
      },

      tableRowClassName({row, rowIndex}) {
        if (row["result"] === "ok") {
          return 'success-row';
        }

        // else if (rowIndex === 3) {
        //   return 'error-row';
        // }

        // if (rowIndex === 1) {
        //   return 'warning-row';
        // } else if (rowIndex === 3) {
        //   return 'success-row';
        // }
        return '';
      },
    }
  };

</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .error-row {
    background: #FEF0F0;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
