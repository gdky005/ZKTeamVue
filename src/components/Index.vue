<template>
  <div>
    <h1>个推推送 辅助工具</h1>
    <h7>【更多功能需要你来提哦，提出不一定做，但是不提一定不做。哈哈哈】</h7>
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
