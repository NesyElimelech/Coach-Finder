<template>
  <!-- A registration form to register as a coach, send the data to the db and update the coaches list -->
  <form @submit.prevent="submitRegistration">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Enter your first name"
        v-model.trim="firstName"
      />
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        v-model.trim="lastName"
        placeholder="Enter your last name"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        rows="5"
        placeholder="Enter a description of yourself..."
        name="description"
        id="description"
        v-model.trim="description"
      />
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        name="rate"
        id="rate"
        min="0"
        max="100"
        v-model.number="rate"
        placeholder="$/hour"
      />
    </div>
    <div class="form-control">
      <h3>Areas of expertise</h3>
      <div>
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          value="frontend"
          v-model="areas"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="backend"
          id="backend"
          value="backend"
          v-model="areas"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="career"
          id="career"
          value="career"
          v-model="areas"
        />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button mode="outline" type="submit">Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    }
  },
  methods: {
    submitRegistration() {
      // * bind all the data from the form inputs and set them as an object, sent them to the db to add new coach
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas
      }

      // TODO - validation for the form's data

      this.$emit('save-data', formData)

      this.firstName = ''
      this.lastName = ''
      this.description = ''
      this.rate = null
      this.areas = []
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

  .invalid {
    label {
      color: $c-invalid;
    }

    input,
    textarea {
      border: 1px solid $c-invalid;
    }
  }
}
</style>
