<template>
  <div>
    <h1>个推推送</h1>

    <div style="margin: 50px; text-align: center">
      <el-input v-model="cid" placeholder="请输入个推 cid"></el-input>
      <p>
        <el-button type="primary" @click="checkCid">查询 CID</el-button>
      </p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GTPush",
    data() {
      return {
        cid: '',
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

        if (resultData.code !== 0) {
          objs = resultData;
          objs.message = resultData.result;
        } else {
          objs = obj.result;
        }

        let code = objs['code'];
        let message = objs['message'];

        console.log(code + "," + message);

        if (code === 0) {
          that.$notify({
            title: '成功',
            message: "消息：",
            type: 'success'
          });
        } else {
          that.$notify({
            title: '失败',
            message: "错误：",
            type: 'error'
          });
        }
      },
    }
  }
</script>

<style scoped>

</style>
