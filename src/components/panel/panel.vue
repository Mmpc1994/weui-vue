<template>
  <section class="panel panel_access">
    <slot name="hd"></slot>
    <slot name="bd"></slot>
    <slot name="ft"></slot>
  </section>
</template>
<script>
  export default {
    name: 'panel'
  };
</script>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .panel{
    position: relative;
    background: $colorWhite;
    overflow: hidden;
    &::after {
      /*@extend .borderTop;*/
    }
    &:first-child{
      margin-top: 0;
    }
  }

</style>
