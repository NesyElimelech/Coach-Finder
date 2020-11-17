<template>
  <!-- A registration form to register as a coach, send the data to the db and update the coaches list -->
  <!-- indicates when there are problems with the inputs on submitting -->
  <form @submit.prevent="submitRegistration">
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Enter your first name"
        v-model.trim="firstName.value"
        @blur="clearErrorsValidations('firstName')"
      />
      <p v-if="!firstName.isValid">First name must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        v-model.trim="lastName.value"
        placeholder="Enter your last name"
        @blur="clearErrorsValidations('lastName')"
      />
      <p v-if="!lastName.isValid">Last name must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        rows="5"
        placeholder="Enter a description of yourself..."
        name="description"
        id="description"
        v-model.trim="description.value"
        @blur="clearErrorsValidations('description')"
      />
      <p v-if="!description.isValid">The Description must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        name="rate"
        id="rate"
        min="0"
        max="100"
        v-model.number="rate.value"
        placeholder="$/hour"
        @blur="clearErrorsValidations('rate')"
      />
      <p v-if="!rate.isValid">Hourly Rate must be greater than 0!</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of expertise</h3>
      <div>
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          value="frontend"
          v-model="areas.value"
          @blur="clearErrorsValidations('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="backend"
          id="backend"
          value="backend"
          v-model="areas.value"
          @blur="clearErrorsValidations('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="career"
          id="career"
          value="career"
          v-model="areas.value"
          @blur="clearErrorsValidations('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">
        You need to check at least one area of expertise!
      </p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button mode="outline" type="submit">Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  props: ['isLoading'],
  data() {
    return {
      firstName: { value: '', isValid: true },
      lastName: { value: '', isValid: true },
      description: { value: '', isValid: true },
      rate: { value: null, isValid: true },
      areas: { value: [], isValid: true },
      formIsValid: true
    }
  },
  methods: {
    clearErrorsValidations(input) {
      //* clear the invalid class from a specific input field
      this[input].isValid = true
    },
    validateForm() {
      //* validate the users inputs and prevent from submitting an empty form
      this.formIsValid = true
      if (this.firstName.value === '') {
        this.firstName.isValid = false
        this.formIsValid = false
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false
        this.formIsValid = false
      }
      if (this.description.value === '') {
        this.description.isValid = false
        this.formIsValid = false
      }
      if (!this.rate.value || this.rate.value < 0) {
        this.rate.isValid = false
        this.formIsValid = false
      }
      if (this.areas.value.length === 0) {
        this.areas.isValid = false
        this.formIsValid = false
      }
    },
    submitRegistration() {
      // * bind all the data from the form inputs and set them as an object, sent them to the db to add new coach
      //* call the validation method to check if the data received is valid
      this.validateForm()
      if (!this.formIsValid) {
        return
      }
      this.formIsValid = true
      const formData = {
        first: this.firstName.value,
        last: this.lastName.value,
        desc: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value
      }

      this.$emit('save-data', formData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.form-control {
  margin: 4rem 0;
  font-size: 2rem;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.8rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 2px solid $c-Secondary;
    border-radius: 1rem;
    padding: 0.5rem;
    background-color: #b3b3b349;
    font: inherit;
    &:focus,
    &:hover {
      background-color: #ffffff;
      outline: none;
      border-color: $c-Primary;
    }
  }

  input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
    &:focus {
      outline: $c-Secondary solid 1px;
    }
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.7rem;
  }
}

.invalid {
  & label {
    color: $c-invalid;
  }

  & input,
  & textarea {
    border: 3px solid $c-invalid;
  }
  & p {
    font-size: 1.4rem;
    font-weight: 900;
    color: $c-invalid;
    margin: 0.5rem;
  }
}
</style>
