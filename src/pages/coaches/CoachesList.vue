<template>
  <h1>Coaches List</h1>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <base-button> <a>Refresh</a> </base-button>
      <base-button
        ><router-link to="/register"
          >Register as Couch
        </router-link></base-button
      >
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      >
      </coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
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

h1 {
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 0.4rem;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
}
.controls {
  display: flex;
  justify-content: space-around;
}
</style>
