<template>
  <div class="container">
    <h1>Coaches List</h1>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Couch </router-link>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
export default {
  components: {
    CoachItem
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
.container {
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: 0.4rem;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  }
  .controls {
    display: flex;
    justify-content: space-between;
    a,
    button {
      text-decoration: none;
      color: $c-Secondary;
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border: 1px solid transparent;
      font-size: 1.6rem;
      font-weight: 600;
      cursor: pointer;
      text-transform: uppercase;
      margin-bottom: 1rem;
      outline: none;

      &:active,
      &:hover,
      &.router-link-active {
        border: 1px solid $c-Secondary;
      }
    }
  }
  ul {
    list-style: none;
    font-size: 1.6rem;
    padding: 1rem;
  }
}
</style>
