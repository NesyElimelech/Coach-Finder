<template>
  <span class="badge" :class="mode"><slot></slot></span>
</template>

<script>
export default {
  props: {
    mode: { type: String, required: true, default: 'frontend' }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.badge {
  padding: 0.5rem 1.5rem;
  margin: 0.8rem;
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  display: inline-block;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  outline: none;
  line-height: 1.2;
  text-transform: capitalize;
}

.frontend {
  background-color: $badge-frontend;
  color: $c-text;
}

.backend {
  background-color: $badge-backend;
  color: $c-text;
}

.career {
  background-color: $badge-career;
  color: $c-text;
}
</style>
