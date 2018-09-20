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
    </div>

    <div style="margin: 50px; text-align: center">

      <el-input v-model="msg" placeholder="请输入个推 推送消息内容"></el-input>
      <p>
        <el-button type="primary" icon="el-icon-search" @click="checkCid">查询消息</el-button>
      </p>

      <p style="text-align: left">

        <el-table
          border
          v-show="resultStatus"
          :data="data"
          style="width: 100%"
          :row-class-name="tableRowClassName">

          <el-table-column prop="msgSendTime" label="发送时间" width="130px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="gtCode" label="gtCode" width="80px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="gtMsgState" label="gtMsgState" width="100px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column label="cids" width="130px">
            <template slot-scope="scope">
              <el-popover
                placement="right"
                trigger="click">
                <!--参考：https://segmentfault.com/q/1010000012511902-->

                <el-table :data="scope.row.cids">
                  <el-table-column width="600" property="cid" label="本次推送相关 Cid"></el-table-column>
                </el-table>
                <el-button slot="reference" size="small" type="primary" plain>获取所有 Cid</el-button>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="title" width="130px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="content" label="content" width="130px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="schemeUrl" label="schemeUrl" width="150px">
            <template slot-scope="scope">
              <el-popover
                trigger="click">
                <!--参考：https://segmentfault.com/q/1010000012511902-->
                {{ scope.row.schemeUrl }}

                <el-button slot="reference" size="small" type="primary" plain>获取 schemeUrl</el-button>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="ttl" label="ttl" width="130px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="pushMsgType" label="pushMsgType" width="130px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="uniqId" label="uniqId" width="300px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="pushChannel" label="pushChannel" width="130px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="taskid" label="taskid" width="300px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="pushCallBack" label="pushCallBack" width="200px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="pushMsgTime" label="pushMsgTime" width="130px" align="center" show-overflow-tooltip></el-table-column>


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
        url: 'http://192.168.17.16:8888',
        envs: [
          '测试环境',
          'ST 环境',
          '正式环境',
        ],
        env: '测试环境',
        resultStatus: false,
        msg: '聚美',
        data: [
          // {"name":"Oppo9-通知-离线2", "content":"汉子"},
          // {"name":"Oppo9-通知-离线22", "content":"女子"},
          ]
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
        let url = this.url + '/logquery.php?key=' + this.msg;

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

            // 处理 cids
            let cids = d[4].split(',');
            let cidObjs = [];

            for (let i = 0; i < cids.length; i++) {
              let cidObj = {};
              cidObj["cid"] = (i + 1) + ". " +cids[i];
              cidObjs.push(cidObj)
            }
            obj["cids"] = cidObjs;
            // console.log("当前 data: " + obj["gtCid"]);
            this.data.push(obj);
          }

          this.resultStatus = true;
        } else {
          this.$notify({
            title: '失败',
            message: "请输入 查询内容 或者请求错误！",
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
