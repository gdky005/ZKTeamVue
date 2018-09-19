<template>
  <div>
    <h2>RD 环境查询个推当天发送消息</h2>

    <div style="margin: 50px; text-align: center">

      <el-input v-model="msg" placeholder="请输入个推 推送消息内容"></el-input>
      <p>
        <el-button type="primary" @click="checkCid">查询消息</el-button>
      </p>

      <p style="text-align: left">

        <el-table
          border
          v-show="resultStatus"
          :data="data"
          style="width: 100%"
          :row-class-name="tableRowClassName">

          <el-table-column prop="msgSendTime" label="发送时间"></el-table-column>
          <!--<el-table-column prop="gtHttpState" label="gtHttpState"></el-table-column>-->
          <el-table-column prop="gtCode" label="gtCode"></el-table-column>
          <el-table-column prop="gtMsgState" label="gtMsgState"></el-table-column>
          <!--<el-table-column prop="unknown" label="unknown"></el-table-column>-->
          <el-table-column prop="gtCid" label="gtCid"></el-table-column>
          <el-table-column prop="title" label="title"></el-table-column>
          <!--<el-table-column prop="msg" label="msg"></el-table-column>-->
          <el-table-column prop="content" label="content"></el-table-column>
          <!--<el-table-column prop="platform" label="platform"></el-table-column>-->
          <el-table-column prop="schemeUrl" label="schemeUrl"></el-table-column>
          <!--<el-table-column prop="page" label="page"></el-table-column>-->
          <el-table-column prop="ttl" label="ttl"></el-table-column>
          <el-table-column prop="pushMsgType" label="pushMsgType"></el-table-column>
          <el-table-column prop="uniqId" label="uniqId"></el-table-column>
          <el-table-column prop="pushChannel" label="pushChannel"></el-table-column>
          <el-table-column prop="taskid" label="taskid"></el-table-column>
          <el-table-column prop="pushCallBack" label="pushCallBack"></el-table-column>
          <!--<el-table-column prop="unknownMsg" label="unknownMsg"></el-table-column>-->
          <el-table-column prop="pushMsgTime" label="pushMsgTime"></el-table-column>


        </el-table>
      </p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GTQueryMsg",
    data() {
      return {
        resultStatus: false,
        msg: '聚美',
        data: [
          // {"name":"Oppo9-通知-离线2", "content":"汉子"},
          // {"name":"Oppo9-通知-离线22", "content":"女子"},
          ]
      }
    },
    methods: {
      checkCid() {

        let url = 'http://192.168.17.16:8888/logquery.php?key=' + this.msg;

        var that = this;
        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'jsonp',
          jsonpCallback: 'callResult',
          success: function (res) {
            console.log(res);
            that.resultCallBackForCheckCid(res);
          },
          error: function (res) {
            console.log(res);
            that.resultCallBackForCheckCid(res);
          },
        });


      },
      // 请求返回成功后的处理方式
      resultCallBackForCheckCid(res) {
        // this.data = res;

        if (res.length > 0) {
          this.$notify({
            title: '成功',
            message: "请求成功！",
            type: 'success'
          });
          // this.data.clean();
          this.data = [];

          for (let i = 0; i < res.length; i++) {
            var obj = {};

            let d = res[i];



            // [
            //   "20180918212819",
            //   "200",
            //   "0",
            //   "ok",
            //   "frBqtEqrbpHzWuNBKaAO+uWP2nbg3FM6FYKSmCVIzTBCNvc5NOzSKTpX6iTVHaaf,58Ye+RYcTXnWcBYKX0712P6LUqs+7xiXRYkYUSpxJmyGPwndrhwwOyWnJsgxR8pH,ErsKQ2YZetf53eu1ylGBGgjVompJsSa7bn89hh9IIXs7BHv+3j3L2FBY/RDOmmoV,R9AYzS2rmkY0UqWCd6/zRMdA+dwEwhu1unEIPCObTyX03BBN1UbBMYjpS9bnYtnm,MGF/KWIJics+I98K9nIaaYr4ydTdfwdjM/Ql4fsY6BLy7tSfmya+g2LSGRSxw4U6",
            //   "",
            //   "Oppo9-通知-离线2",
            //   "aaa",
            //   "汉子",
            //   "android",
            //   "jumeimall://page/alldetail?itemid=ht160307p1596621t2&type=global_deal",
            //   "",
            //   "500000",
            //   "push_to_regid",
            //   "send_msg_to_users::5ba0fd6ea7d6d",
            //   "MIPush",
            //   "scm54721537277302004Sd",
            //   "Xcm54721537277302003l5",
            //   "unknown_unknown5ba0fd6ea7dba",
            //   "1537277299"
            // ]


            // msgSendTime: "",
            //   gtHttpState: "",
            //   gtCode: "",
            //   gtMsgState: "",
            //   unknown: "",
            //   gtCid: "",
            //   title: "",
            //   msg: "",
            //   content: "",
            //   platform: "",
            //   schemeUrl: "",
            //   page: "",
            //   ttl: "",
            //   pushMsgType: "",
            //   uniqId: "",
            //   pushChannel: "",
            //   taskid:"",
            //   pushCallBack: "",
            //   unknownMsg: "",
            //   pushMsgTime: "",


            obj["msgSendTime"] =  d[0];
            obj["gtHttpState"] =  d[1];
            obj["gtCode"] =  d[2];
            obj["gtMsgState"] =  d[3];
            obj["gtCid"] =  d[4];
            obj["unknown"] =  d[5];
            obj["title"] =  d[6];
            obj["msg"] =  d[7];
            obj["content"] =  d[8];
            obj["platform"] =  d[9];
            obj["schemeUrl"] =  d[10];
            obj["page"] =  d[11];
            obj["ttl"] =  d[12];
            obj["pushMsgType"] =  d[13];
            obj["uniqId"] =  d[14];
            obj["pushChannel"] =  d[15];
            obj["taskid"] =  d[16];
            obj["pushCallBack"] =  d[17];
            obj["unknownMsg"] =  d[18];
            obj["pushMsgTime"] =  d[19];

            console.log("当前 data: " + obj["gtCid"]);
            this.data.push(obj);
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
