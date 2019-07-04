<template>
  <div id="main">
    <p>
      <h1>ZK MarkDown 编辑器</h1>
    </p>
    <mavon-editor v-model="value" style="height: 800px"></mavon-editor>
  </div>

</template>

<script>
  export default {
    name: "MarkDown",
    data() {
      return {value: ''}
    }
  }


</script>

<style scoped>

</style>
