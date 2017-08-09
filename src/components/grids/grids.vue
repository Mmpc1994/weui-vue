<template>
  <section class="grids">
    <slot></slot>
  </section>
</template>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .grids{
    position: relative;
    overflow: hidden;
    background: $colorWhite;
    &::after{
      @extend .borderLeft;
    }
    &::before{
      @extend .borderTop;
    }
  }
</style>
