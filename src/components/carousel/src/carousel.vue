<template>
  <div class="cls-carousel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'clsCarousel'
  }
</script>

<style lang="scss">
  .cls-carousel {
    height: 200px;
    position: relative;
  }
</style>