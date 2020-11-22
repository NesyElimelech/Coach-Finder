<template>
  <the-header></the-header>
  <!-- shows a moving background cubes  -->
  <div class="container">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  name: 'App',
  components: { TheHeader },
  created() {
    this.$store.dispatch('tryLogin')
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout
    }
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      //* checks if the expirationToken has expired and if it is, redirect to /coaches
      if (curValue && curValue !== oldValue) {
        this.router.replace('/coaches')
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
.container {
  min-height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;

  .cube {
    position: absolute;
    top: 80vh;
    left: 75vw;
    width: 10px;
    height: 10px;
    border: solid 1px darken($c-Secondary, 8%);
    border-radius: 0.1rem;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;
    z-index: -2;

    &:nth-child(2n) {
      border-color: lighten($c-Secondary, 10%);
    }

    &:nth-child(2) {
      animation-delay: 1s;
      left: 25vw;
      top: 40vh;
    }

    &:nth-child(3) {
      animation-delay: 2s;
      left: 75vw;
      top: 50vh;
    }

    &:nth-child(4) {
      animation-delay: 4s;
      left: 90vw;
      top: 10vh;
    }

    &:nth-child(5) {
      animation-delay: 5s;
      left: 10vw;
      top: 85vh;
    }

    &:nth-child(6) {
      animation-delay: 7s;
      left: 50vw;
      top: 10vh;
    }
    &:nth-child(7) {
      animation-delay: 10s;
      left: 10vw;
      top: 30vh;
    }
  }

  @keyframes cube {
    from {
      transform: scale(0) rotate(0deg) translate(-50%, -50%);
      opacity: 0.5;
    }
    to {
      transform: scale(10) rotate(960deg) translate(-50%, -50%);
      opacity: 0;
    }
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.router-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.router-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
