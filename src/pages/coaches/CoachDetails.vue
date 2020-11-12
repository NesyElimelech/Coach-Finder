<template>
  <div>
    <h1>Details for coach</h1>
    <router-link to="/coaches/c1/contact">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

a {
  text-decoration: none;
  color: $c-Primary;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;

  &:active,
  &:hover,
  &.router-link-active {
    border: 1px solid $c-Secondary;
  }
}
</style>
