<template>
  <div>
    <!-- shows a list of filtered coaches in a custom component with 3 options to filter * -->
    <teleport to="body">
      <img src="../../assets/img/Coaches_List.svg" class="img" />
    </teleport>
    <base-dialog
      :show="!!error"
      title="An Error Occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <h1>Coaches List</h1>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)">
          Refresh
        </base-button>
        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
          >Login to Register as Coach</base-button
        >
        <base-button
          to="/register"
          link
          v-if="isLoggedIn && !isCoach && !isLoading"
        >
          Register as Couch
        </base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
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
      <base-card v-else>
        <h3>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
  data() {
    return {
      isLoading: false,
      error: null,
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
      return !this.isLoading && this.$store.getters['coaches/hasCoaches']
    },
    isCoach() {
      //* checks if the user is registered as coach
      return this.$store.getters['coaches/isCoach']
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  created() {
    this.loadCoaches()
  },
  methods: {
    //* update the showed list of coaches by the user's picked filter ('frontend', 'backend', 'career')
    setFilters(updateFilters) {
      this.activeFilters = updateFilters
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh
        })
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
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

p {
  margin-top: 1.8rem;
}
</style>
