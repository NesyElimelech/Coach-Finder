<template>
  <div>
    <!-- only shows when trying to reach an invalid URL. -->
    <img src="../assets/img/404_Not_Found.svg" alt="Page not found" />
    <base-button to="/" link mode="outline">Back to the Home Page</base-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  overflow: hidden;
  a {
    margin-top: 3rem;
  }

  img {
    width: 50%;
  }
}
</style>
