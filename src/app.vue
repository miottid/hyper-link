<template>
  <div id="app">
    <nav>
      <ul>
        <li><hyper-link href="/foo" title="Foo" /></li>
        <li><hyper-link href="/bar" title="Bar" /></li>
        <li><hyper-link href="https://muxumuxu.com" title="Muxu.Muxu" target="_blank" rel="noopener" /></li>
      </ul>
    </nav>
    <router-view />
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
