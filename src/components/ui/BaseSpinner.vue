<template>
  <!-- A basic spinner to indicate the user something is working and yet to be completed -->
  <div class="loading-spinner-disk">
    <div class="spinning-disk">
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-spinner-disk {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;

  & .spinning-disk {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;

    & div {
      box-sizing: content-box;
    }

    & > div > div {
      position: absolute;
      border-radius: 50%;

      &:nth-child(1) {
        top: 30px;
        left: 30px;
        width: 140px;
        height: 140px;
        background: #1d3f72;
      }

      &:nth-child(2) {
        top: 39.800000000000004px;
        left: 79px;
        width: 42px;
        height: 42px;
        background: #5699d2;
        animation: spinning-disk 1s linear infinite;
        transform-origin: 21px 60.199999999999996px;
      }
    }
  }
}
@keyframes spinning-disk {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* generated by https://loading.io/ */
</style>
