<template>
  <!-- shows a contact coach form where you put your email and your message to a specific coach. -->
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" name="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" v-model.trim="message" />
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid email and a non-empty message!
    </p>
    <div class="actions">
      <base-button type="submit">Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false
        return
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      })
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

form {
  margin: 1rem;
  padding: 1rem;
  border: 4px solid $c-Secondary;
  border-radius: 1.2rem;
  box-shadow: 6px 6px 12px #00000052;
  font-size: 1.8rem;

  & .form-control {
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: block;
    }

    & input,
    & textarea {
      display: block;
      width: 100%;
      font: inherit;
      border: 2px solid $c-Secondary;
      border-radius: 0.5rem;
      padding: 0.5rem;

      &:focus,
      &:focus {
        border-color: $c-Primary;
        background-color: #faf6ff;
        outline: none;
      }
    }
  }
  & .errors {
    font-weight: bold;
    color: $c-invalid;
  }

  & .actions {
    text-align: center;
  }
}
</style>
