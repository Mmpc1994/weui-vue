<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabs'
  }
</script>

<style lang="scss">
  .tab {
    height: 100%;
    position: relative;
  }
</style>