<template>
  <div id="app">
    <div class="content">
      <img src="./images/logo.svg" alt="hyper-link logo">
      <ul>
        <li><hyper-link>Default link</hyper-link></li>
        <li><hyper-link href="/foo">Relative link</hyper-link></li>
        <li><hyper-link href="https://github.com/muxumuxu/hyper-link">External link</hyper-link></li>
        <li><hyper-link href="mailto:?subject=Hello%20World">Mailto link</hyper-link></li>
        <li><hyper-link href="tel:+33000000000">Tel link</hyper-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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

img {
  display: block;
  margin: 0 auto 3rem;
}

ul {
  margin: 0;
}
</style>
