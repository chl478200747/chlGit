<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
.clearfix::after {
  content: '.';
  height: 0;
  overflow: hidden;
  display: block;
  clear: both;
}
</style>
