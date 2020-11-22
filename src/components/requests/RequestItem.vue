<template>
  <!-- shows a card of a request from a coach with an email and a message, in a card component -->
  <li>
    <div>
      <a :href="emailLink" target="_blank">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

li {
  margin: 1rem 0;
  border: 2px solid $c-Secondary;
  height: 14rem;
  width: 100%;
  padding: 2rem;
  font-size: 2rem;

  & a {
    color: $c-Primary;
    text-decoration: none;
    font-weight: bold;

    &:hover,
    &:active,
    &:visited {
      filter: brightness(88%);
      color: $c-Primary;
    }
  }

  & p {
    margin: 1rem 0 0 0;
  }
}
</style>
