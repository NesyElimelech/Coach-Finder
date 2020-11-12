<template>
  <div>
    <h1>Details for coach</h1>
    <base-button>
      <router-link to="/coaches/c1/contact">Contact</router-link>
    </base-button>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue'
export default {
  components: { BaseButton }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

a {
  font-size: 1.8rem;
}
</style>
