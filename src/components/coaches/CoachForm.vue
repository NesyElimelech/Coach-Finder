<template>
  <form @submit.prevent="submitRegistration">
    <div class="form-control">
      <label for="firstName"></label>
      <input type="text" name="firstName" id="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName"></label>
      <input type="text" name="lastName" id="lastName" />
    </div>

    <div class="form-control">
      <label for="hourlyRate"></label>
      <input
        type="number"
        name="hourlyRate"
        id="hourlyRate"
        min="0"
        max="100"
      />
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    submitRegistration() {}
  }
}
</script>

<style lang="scss" scoped></style>
