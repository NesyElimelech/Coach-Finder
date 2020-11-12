<template>
  <base-card>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }} &nbsp; </span>
    </div>
    <div class="actions">
      <base-button
        ><router-link :to="coachContactLink">Contact</router-link></base-button
      >
      <base-button
        ><router-link :to="coachDetailLink"
          >View Details</router-link
        ></base-button
      >
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

a {
  font-size: 1.9rem;
}
</style>
