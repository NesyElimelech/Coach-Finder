<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.btn {
  width: auto;
  margin: 0 1rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 900;
  border: 2px solid $c-Secondary;
  border-radius: 0.85rem;
  font-weight: 900;
  font-size: 1.8rem;
  background: transparent;
  transition: background 0.3s ease;
  text-align: center;
  display: block;
  cursor: pointer;

  &:hover,
  &:active &:visited {
    background: $c-Secondary;
  }
}
</style>
