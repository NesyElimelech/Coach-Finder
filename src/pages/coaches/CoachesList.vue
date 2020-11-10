<template>
  <div class="container">
    <h1>Coaches List</h1>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Couch </router-link>
      </div>
      <ul>
        LIST OF COACHES
      </ul>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$c-Primary: #5b78d6;
$c-Secondary: #5582ff;
$c-background: #202020;

.container {
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: 0.4rem;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
    color: $c-Primary;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:active,
    &:hover,
    &.router-link-active {
      border: 1px solid $c-Secondary;
    }
  }
}
</style>
