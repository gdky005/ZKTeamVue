<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

Vue.component('hrLine', {
  template: '<hr class="blueLine"/>'
})

</script>

<style>
  @import "./assets/css/zkteam.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin: -8px;*/
  /*padding-top: 60px;*/
}
</style>
