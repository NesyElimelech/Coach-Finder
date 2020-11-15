<template>
  <!-- shows 3 checkboxs to choose witch coaches to show in the filtered coaches list according the user's picks-->
  <base-card>
    <div class="inputCard">
      <header>
        <h2>Find Your Coach</h2>
      </header>
      <div>
        <span class="filter-option">
          <div :class="{ active: filters.frontend }">
            <input
              type="checkbox"
              name="frontend"
              id="frontend"
              checked
              @change="setFilter"
            />
            <label for="frontend">Frontend</label>
          </div>
          <div :class="{ active: filters.backend }">
            <input
              type="checkbox"
              name="backend"
              id="backend"
              checked
              @change="setFilter"
            />
            <label for="backend">Backend</label>
          </div>
          <div :class="{ active: filters.career }">
            <input
              type="checkbox"
              name="career"
              id="career"
              checked
              @change="setFilter"
            />
            <label for="career">Career</label>
          </div>
        </span>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  methods: {
    setFilter(event) {
      // * check if the user change the checked status and if so it's update the filters accordingly
      // * so the coaches list view will update too
      const inputId = event.target.id
      const isActive = event.target.checked
      const updateFilters = {
        ...this.filters,
        [inputId]: isActive
      }
      this.filters = updateFilters
      this.$emit('change-filter', updateFilters)
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0;
  font-size: 3.5rem;
}
.inputCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  .filter-option {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;

    input,
    label {
      margin-right: 0.5rem;
    }
    .active label {
      font-weight: 900;
    }
  }
}
</style>
