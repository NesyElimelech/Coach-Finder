<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }} &nbsp; </span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact'
    },
    coachDetailLink() {
      return this.$route.path + '/' + this.id
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;

  h3 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 1.6rem;
  }

  h3,
  h4 {
    margin: 0.5rem 0;
  }

  div {
    margin: 0.5rem 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    a {
      margin-right: 0.5rem;
      text-decoration: none;
      cursor: pointer;
      color: $c-mainBg;
      background-color: $c-links;
      padding: 0.5rem 1rem;
      border: 1px solid $c-background;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: background 0.4s ease;

      &:hover,
      &:active {
        color: $c-links;
        background-color: $c-mainBg;
      }
    }
  }
}
</style>
