<template>
  <div id="app">
    <hyper-link href="https://muxumuxu.com" title="Muxu.Muxu" target="_blank" rel="noopener" />
  </div>
</template>

<script>
import HyperLink from './components/hyper-link.vue'

export default {
  name: 'app',
  components: {
    HyperLink
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
