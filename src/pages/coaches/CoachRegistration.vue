<template>
  <div>
    <!-- Shows the registration form for a user to become a coach. -->
    <teleport to="body">
      <img src="../../assets/img/Register.svg" class="img" />
    </teleport>
    <base-dialog
      :show="!!error"
      title="An Error Occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <h1>Register as a coach now!</h1>
      <base-card>
        <coach-form @save-data="saveData" :isLoading="isLoading"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
  data() {
    return {
      error: null,
      isLoading: false
    }
  },
  components: { CoachForm },
  methods: {
    async saveData(data) {
      //* add the new coach object to the coaches array , redirect to '/coaches' page.
      this.isLoading = true
      try {
        await this.$store.dispatch('coaches/registerCoach', data)
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false
      this.$router.replace('/coaches')
    },
    handleError() {
      this.error = null
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 6rem;
}
</style>
