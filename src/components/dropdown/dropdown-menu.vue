<template>
  <transition>
    <ul class="dropdown-menu" v-show="showPopup">
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
  export default {
    name: 'dropdown-menu',

    componentName: 'DropdownMenu',

    data () {
      return {
        showPopup: false
      }
    },

    created () {
      this.$on('visible', val => {
        this.showPopup = val
      })
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss"; 
  .dropdown-menu{
    background-color: $bgColor;
    position: absolute;
    padding: 5px;
    padding-right: 20px;
  }
</style>