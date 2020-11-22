<!-- A login/signup form page -->
<template>
  <div>
    <teleport to="body">
      <img src="../../assets/img/Login.svg" class="img" />
    </teleport>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed title="Authenticating..." :show="isLoading">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" name="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <p v-if="!formIsValid">
          *Please enter a valid email and password (Must be at least 6
          characters long).
        </p>
        <base-button mode="outline">{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      return this.mode == 'login' ? 'Login' : 'Signup'
    },
    switchModeButtonCaption() {
      return this.mode == 'login' ? 'Signup Instead' : 'Login Instead'
    }
  },
  methods: {
    async submitForm() {
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false
        return
      }

      const actionPayload = {
        email: this.email,
        password: this.password
      }

      this.isLoading = true
      try {
        if (this.mode == 'login') {
          await this.$store.dispatch('login', actionPayload)
        } else {
          await this.$store.dispatch('signup', actionPayload)
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches')
        this.$router.replace(redirectUrl)
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, try again later.'
      }

      this.isLoading = false
    },
    switchAuthMode() {
      this.mode === 'login' ? (this.mode = 'signup') : (this.mode = 'login')
    },
    handleError() {
      this.error = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

form {
  margin: 1rem;
  padding: 3rem 6rem;
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

    & input {
      display: block;
      width: 100%;
      font: inherit;
      border: 2px solid $c-Secondary;
      border-radius: 0.5rem;
      padding: 0.5rem;

      &:focus {
        border-color: $c-Primary;
        background-color: #faf6ff;
        outline: none;
      }
    }
  }
  p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 900;
    color: $c-invalid;
  }
}
</style>
