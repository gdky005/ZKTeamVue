<template>
  <div>
    <h1>个推推送</h1>

    <div style="margin: 50px; text-align: center">

      <p class="a">Hello!</p>

      <el-input v-model="cid" placeholder="请输入个推 cid"></el-input>
      <p>
        <el-button type="primary" @click="checkCid">查询 CID</el-button>
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
        resultStatus: false,
        cid: '4,5,6,7,9,9',
        data: [{
          'result': '',
          'taskId': '',
        }]
      }
    },
    methods: {
      checkCid() {
        // 注册接口请求
        var obj = {};
        obj.cid = this.cid;
        obj.that = this;

        //发起请求
        this.$store.dispatch('registerRequest', obj);
      },
      // 请求返回成功后的处理方式
      resultCallBackForCheckCid(obj) {
        let that = obj.that;

        let resultData = obj.result;
        let objs;

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
        } else  {
          this.$notify({
                title: '失败',
                message: "请求错误",
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
