<template>
    <div style="margin-top: 60px;text-align: center;">


      <h1>Android</h1>

      <p><a href="https://github.com/Blankj/AndroidUtilCode/blob/master/utilcode/README-CN.md" target="view_window">
        <el-button size="mini" type="primary" round>Android 常用工具类查询</el-button>
      </a></p>

      <hr style="height:1px;border:none;border-top:1px dashed #0066CC; margin-left: 200px; margin-right: 200px" />

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

      <!--<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />-->
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
