<template>
  <div class="cls-cells">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'cells'
  }
</script>
<style lang="scss">
  @import "src/styles/index.scss";

  .cls-cells_title + .cls-cells{
    margin-top: 0;
  }

  .cls-cells{
    background: $white;
    padding-top: 0px;
    margin-top: 15px;
    overflow: hidden;
    position: relative;
    line-height: 1.47;

    &::before{
      @extend .borderTop;
      top:-2px;
    }
  }
</style>
