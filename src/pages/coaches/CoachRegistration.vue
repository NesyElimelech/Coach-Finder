<template>
  <!-- Shows the registration form and pass the data from it to the db -->
  <img src="../../assets/img/Register.svg" alt="Man Stands" class="img" />
  <section>
    <h1>Register as a coach now!</h1>
    <base-card>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      //* add the new coach object to the coaches array , redirect to '/coaches' page
      this.$store.dispatch('coaches/registerCoach', data)
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 6rem;
}
</style>
