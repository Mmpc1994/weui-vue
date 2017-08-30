<template>
  <div class="cls-carousel__item">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'clsCarouselItem'
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";

  .cls-carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    z-index: 0;
    background-color: $lightBlue;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
</style>
