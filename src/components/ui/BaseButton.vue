<template>
  <!-- check if if the base button is a link or a button component and add some style to it -->
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: { type: String, required: false, default: 'flat' },
    link: { type: Boolean, required: false, default: false },
    to: { type: String, required: false, default: '/' }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

a,
button {
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  color: $c-text;
  font-size: 1.8rem;
  font-weight: 900;
  font-weight: 900;
  font-size: 1.8rem;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  outline: none;
}

.outline {
  background-color: transparent;
  border: 2px solid $c-Secondary;
  border-radius: 0.85rem;
  transition: background 0.3s ease;

  &:hover,
  &:active,
  &:visited {
    background: $c-Secondary;
  }
}
.flat {
  background-color: $c-Secondary;
  color: $c-text;
  border-radius: 0.85rem;

  &:hover,
  &:active,
  &:visited {
    background-color: $c-Secondary;
    filter: brightness(115%);
  }
}
</style>
