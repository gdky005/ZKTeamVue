<template>
  <div id="main">
    <h1>ZK MarkDown 编辑器</h1>

    <p><el-button @click="versionData"  size="mini" type="primary">获取 Version.gradle 数据</el-button></p>

    <mavon-editor v-model="value" style="height: 1200px" @save="save(value)"></mavon-editor>
  </div>

</template>

<script>
  export default {
    name: "MarkDown",
    data() {
      return {value: ''}
    },
    created() {
      console.log("加载数据了哦！");
      this.versionData();
    },
    methods: {
      versionData() {
        console.log("开始请求数据");
        let that = this;
        var nowTime = new Date().getTime();
        this.$fly.get('http://zkteam.cc/android/gradle/versions_1.gradle?' + nowTime)
          .then(function (response) {
            let content = response.data;
            console.log(content);
            that.value = content
          }).catch(function (error) {
            console.log(error);
          });
      },
      save(value) {
        console.log("保存数据为：" + value);

        if(typeof value == "undefined" || value == null || value == ""){
          console.log("数据为空");
          this.$notify.error({
            title: '错误',
            message: '请先获取数据'
          });
          return true
        }

        var saveUrl = "http://node.zkteam.cc/saveGradleVersionFile"
        let that = this;
        this.$fly.post(saveUrl, value)
          .then(function (response) {
            let content = response.data;
            console.log(content);

            that.$notify({
              title: '保存成功',
              message: '保存数据成功，可以在 app 直接访问',
              type: 'success'
            });

          }).catch(function (error) {
          console.log(error);
        });
      }
    },

  }


</script>

<style scoped>

</style>
