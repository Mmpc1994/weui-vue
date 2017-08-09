<template>
  <div class="panel_hd">
    {{title}}
  </div>
</template>
<script>
  export default {
    name: 'panel_hd',
    props: {
      title: String
    }
  };
</script>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .panel_hd {
    padding: 14px 15px 10px;
    font-size: 1.3rem;
    position: relative;
    &::after {
      @extend .borderBottom
    }
  }
</style>
