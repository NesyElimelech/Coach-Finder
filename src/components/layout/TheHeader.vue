<template>
  <!-- shows the top navbar -->
  <header>
    <nav>
      <h1><router-link to="/">Find a Couch</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="isLoggedIn && isCoach">
          <router-link to="/requests">All Requests</router-link>
        </li>
        <li v-else-if="!isLoggedIn">
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button mode="outline" @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isCoach() {
      //* checks if the user is registered as coach
      return this.$store.getters['coaches/isCoach']
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

header {
  width: 100%;
  background-color: $c-headerBg;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: $c-text;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-bottom: 3px solid transparent;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:active,
    &:hover,
    &.router-link-active {
      border-bottom: 3px solid $c-Secondary;
    }
  }
  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 0.5rem;
    }
  }
  h1 {
    margin: 0;
    a {
      font-size: 4rem;
      color: white;
      margin: 0;
      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
  }
}
</style>
