<template>
  <div>
    <h1>个推推送</h1>

    <div style="margin: 50px; text-align: center">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <p>
        <el-button type="primary" @click="login">查询 CID</el-button>
      </p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GTPush",
    data() {
      return {
        input: ''
      }
    },
    methods: {
      login() {
        this.$axios.get('http://zkteam.cc/Subscribe/jsonQueryInfo/?des=80s')
          .then(function (res) {
            console.log(res);
            // that.resultCallBackForQuitAccount(that, res.data);
          })
          .catch(function (err) {
            console.log(err);
            // that.resultCallBackForQuitAccount(that, err);
          });


        this.$message.error('当前输入的内容是：' + this.input);
        // login
        // let account = this.userInfo.user_name;
        // let password = this.userInfo.user_password;
        //
        //
        // this.$refs.userInfo.validate((valid) => {
        //   if (valid) {
        //     this.loginDialogState = false;
        //     this.innerVisible = false;
        //
        //     let that = this;
        //
        //     let obj = {};
        //     obj.that = that;
        //     obj.account = account;
        //     obj.password = password;
        //
        //
        //     this.$store.dispatch('login', obj);
        //
        //   } else {
        //     this.$message.error('请先根据页面提示修复错误');
        //
        //     return true;
        //   }
        // });
      },
    }
  }
</script>

<style scoped>

</style>
