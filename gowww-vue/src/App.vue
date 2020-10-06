<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #25294A;
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}
h1, strong {
  font-weight: 700;
}
button {
  cursor: pointer;
}
</style>
