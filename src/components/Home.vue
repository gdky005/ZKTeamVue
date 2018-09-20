<template>
    <div style="margin-top: 60px;text-align: center;">
      <h1>个推推送 辅助工具</h1>

      <p>
        <router-link to="GtPush">
          <el-button type="primary" size="medium" round @click="checkCid">查询 CID 是否离线</el-button>
        </router-link>
      </p>
      <p>
        <router-link to="GTQueryMsg">
          <el-button type="primary" size="medium" round @click="checkCid">查询 个推 消息</el-button>
        </router-link>
      </p>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
