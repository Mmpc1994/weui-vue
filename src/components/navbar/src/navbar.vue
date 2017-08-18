<template>
  <div class="cls-navbar" layout>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'clsNavbar',

    componentName: 'clsNavbar',

    props: {
      value: String
    },

    created () {
      this.$on('switchTab', (tab) => {
        this.$emit('input', tab)
      })
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables";

  .cls-navbar{
    position: relative;
    width: 100%;
    background-color: $darkWhite;
  }
</style>