<template>
  <div id="app">
    <div class="content">
      <h1><code>&lt;hyper-link&gt;</code></h1>
      <ul>
        <li><hyper-link title="Default link" /></li>
        <li><hyper-link href="/foo" title="Relative link" /></li>
        <li><hyper-link href="https://github.com/muxumuxu/hyper-link" title="External link" /></li>
        <li><hyper-link href="mailto:?subject=Hello%20World" title="Mailto link" /></li>
        <li><hyper-link href="tel:+33000000000" title="Tel link" /></li>
      </ul>
    </div>
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
body {
  background: rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  min-height: 100vh;
  padding: 3rem 1rem;
}

.content {
  background: white;
  border-radius: 0.25rem;
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
}

h1 {
  margin: 0 0 1rem;
  text-align: center;
}

code {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0.25rem;
}

ul {
  margin: 0;
}
</style>
