<template>
  <!-- a card component -->
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
.card {
  width: 60rem;
  margin: 2rem;
  background-color: rgba($c-background, 0.4);
  color: $c-text;
  padding: 4rem;
  border-radius: 1rem;
  list-style: none;
  box-shadow: 0.4rem 0.6rem 0.8rem rgba($c-background, 0.7);
}
</style>
