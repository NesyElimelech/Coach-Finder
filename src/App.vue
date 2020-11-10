<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  name: 'App',
  components: { TheHeader }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  font-family: 'Tajawal', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  min-height: 100vh;
  width: 100%;
  background-color: #424b56;
  color: #ebebeb;
}
</style>
