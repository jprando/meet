<template>
  <div id="app">
    <ViewWebRTC></ViewWebRTC>
  </div>
</template>

<script>
import ViewWebRTC from './components/viewWebRTC.vue'

export default {
  name: 'App',
  components: {
    ViewWebRTC
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
