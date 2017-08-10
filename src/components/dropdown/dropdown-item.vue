<template>
  <li class="dropdown-menu__item" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'dropdown-item',

    props: {
      disabled: Boolean
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss"; 
  .dropdown-menu__item{
    padding: 3px;
    
    .el-checkbox__label {
      color: $textColor;
    }
  }
</style>