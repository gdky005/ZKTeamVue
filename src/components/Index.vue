<template>
  <div>
    <h1>个推推送 辅助工具</h1>
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

<style scoped>

</style>
