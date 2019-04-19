<template>

  <div>
    <h1>Git基本操作指南</h1>

    <p>
      <viewer :images="images" style="height: 800px;">
        <img :src="picUrl" height="100">
      </viewer>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Git",
    data() {
      return {
        picUrl: require('../assets/git.png'),

      }
    }
  }
</script>

<style scoped>

</style>
