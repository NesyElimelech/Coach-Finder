<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <dialog open v-if="show">
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <div class="error"></div>
        <slot></slot>
      </section>
      <menu v-if="!fixed">
        <slot name="actions">
          <base-button mode="flat" @click="tryClose">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return
      }
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  background-color: $c-background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;

  header {
    background-color: $c-Secondary;
    color: $c-text;
    width: 100%;
    padding: 1rem;

    h2 {
      margin: 0;
    }
  }
  section {
    padding: 2rem;
    color: $c-text;
  }

  menu {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }
  .error {
    height: 20rem;
    width: 100%;
    background-image: url('../../assets/img/error500.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  @media (min-width: 768px) {
    dialog {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
}
</style>
