<template>
  <img src="../../assets/img/Coach_Details.svg" alt="Man Stands" class="img" />
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach us now!</h2>
        <base-button link :to="contactLink" @click="disableButton" disabled
          >Contact</base-button
        >
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :mode="area">
        {{ area }}
      </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },
  methods: {
    disableButton() {
      return true
    }
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
    },
    contactLink() {
      return this.$route.path + '/contact'
    },
    areas() {
      return this.selectedCoach.areas
    },
    rate() {
      return this.selectedCoach.hourlyRate
    },
    description() {
      return this.selectedCoach.description
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id == this.id
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

h2 {
  font-size: 3rem;
}

a {
  font-size: 1.8rem;
}
p {
  margin: 1rem;
  padding: 1rem;
}
</style>
