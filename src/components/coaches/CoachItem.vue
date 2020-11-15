<template>
  <!-- display the coach's main details as a card component for each coach -->
  <base-card>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :mode="area">{{
        area
      }}</base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailLink">View Details</base-button>
    </div>
  </base-card>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
export default {
  components: { BaseButton },
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

h3 {
  font-size: 3rem;
}
h4 {
  font-size: 2rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
