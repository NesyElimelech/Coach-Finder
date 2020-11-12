<template>
  <the-header></the-header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  name: 'App',
  components: { TheHeader }
}
</script>

<style lang="scss">
@import './styles/main.scss';
.container {
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
}
</style>
