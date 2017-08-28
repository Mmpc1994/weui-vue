<template>
  <a href="javascript:void(0)" class="cls-grid">
    <div class="grid_value">
      <slot name="value">{{value}}</slot>
    </div>
    <p class="grid_label">{{label}}</p>
  </a>
</template>
<script>
  export default {
    name: 'grid',
    props: {
      value: String,
      label: String
    }
  };
</script>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .grid{
    position: relative;
    padding: 20px 10px;
    float: left;
    width: 33.3333%;
    box-sizing: border-box;
    &::before {
      @extend .borderRight;
    }
    &::after {
      @extend .borderBottom;
    }
  }
  .grid_value {
    text-align: center;
    color: $colorRed;
    font-size: 1.8rem;
  }

  .grid_label{
    display: block;
    text-align: center;
    color: $colorDark;
    position: relative;
    top: 5px;
    color: $textColor;
    font-size: 1rem;
    @include textOverflowCut;
  }
</style>
