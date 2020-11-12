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
@import './styles/main.scss';
</style>
