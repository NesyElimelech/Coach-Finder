<template>
  <!-- shows a list of filtered coaches in a custom component with 3 options to filter * -->
  <img src="../../assets/img/Coaches_List.svg" alt="Man Stands" class="img" />
  <h1>Coaches List</h1>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <div class="controls">
      <base-button mode="outline"> Refresh </base-button>
      <base-button to="/register" link v-if="!isCoach">
        Register as Couch
      </base-button>
    </div>
    <ul v-if="hasCoaches">
      <!-- looping through all the coaches, passing props to each coach component  -->
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
      //* get all the coaches from the db
      const coaches = this.$store.getters['coaches/coaches']

      //* filter the coaches by their area of expertise ('frontend', 'backend', 'career')
      //* if none of the check boxes is checked, it return empty list
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
      //* checks if there is any coaches in the db
      return this.$store.getters['coaches/hasCoaches']
    },
    isCoach() {
      //* checks if the user is registered as coach
      return this.$store.getters['coaches/isCoach']
    }
  },
  methods: {
    //* update the showed list of coaches by the user's picked filter ('frontend', 'backend', 'career')
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
