<template>
  <img src="../../assets/img/Coaches_List.svg" alt="Man Stands" class="img" />
  <h1>Coaches List</h1>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <div class="controls">
      <base-button mode="outline"> Refresh </base-button>
      <base-button to="/register" link>
        Register as Couch
      </base-button>
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
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  components: {
    CoachItem,
    CoachFilter
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches']

      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  },
  methods: {
    setFilters(updateFilters) {
      this.activeFilters = updateFilters
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
