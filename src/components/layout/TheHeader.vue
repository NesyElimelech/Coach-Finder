<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Couch</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">All Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

header {
  width: 100%;
  background-color: $c-headerBg;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: $c-Primary;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    font-size: 4rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:active,
    &:hover,
    &.router-link-active {
      border: 1px solid $c-Secondary;
    }
  }
  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 0.5rem;
    }
  }
  h1 {
    margin: 0;
    a {
      font-size: 4rem;
      color: white;
      margin: 0;
      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
  }
}
</style>
