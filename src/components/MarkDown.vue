<template>
  <div id="main">
    <h1>ZK MarkDown 编辑器</h1>

    <p><el-button @click="versionData"  size="mini" type="primary">获取 Version.gradle 数据</el-button></p>

    <mavon-editor v-model="value" style="height: 800px" @save="save(value)"></mavon-editor>
  </div>

</template>

<script>
  export default {
    name: "MarkDown",
    data() {
      return {value: ''}
    },
    methods: {
      versionData() {
        console.log("开始请求数据");
        let that = this;
        this.$fly.get('http://zkteam.cc/android/gradle/versions_1.gradle')
          .then(function (response) {
            let content = response.data;
            console.log(content);
            that.value = content
          }).catch(function (error) {
            console.log(error);
          });
      },
      save(value) {
        console.log(value);
      }
    }

  }


</script>

<style scoped>

</style>
