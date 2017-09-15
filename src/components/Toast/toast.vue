<template>
  <transition>
    <section class="cls-toast">1</section>
  </transition>
</template>

<script>
  export default {
    name: 'clsToast'
  }
</script>

<style lang="scss">
  .cls-toast {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>