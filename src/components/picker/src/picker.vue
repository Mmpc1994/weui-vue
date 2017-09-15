<template>
  <div class="cls-picker">
    <div class="cls-picker__toolbar" v-if="toolbar">
      <slot name="toolbar"></slot>
    </div>
    <div class="cls-picker__items" layout>
      <cls-picker-item 
        v-for="(item, index) in values" 
        :key="index"
        v-model="item.value"
        :visibleItemCount="visibleItemCount"
        flex
        ></cls-picker-item>
      <div class="cls-picker__highlight" :style="{height: itemHeight + 'px', 'margin-top': -itemHeight/2 + 'px'}"></div>
    </div>
  </div>
</template>
<script>
  import clsPickerItem from './picker-item.vue'
  export default {
    name: 'clsPicker',
    components: { clsPickerItem },
    props: {
      values: {
        type: Array,
        default () {
          return []
        }
      },
      toolbar: Boolean,
      visibleItemCount: {
        type: Number,
        default: 5
      },
      itemHeight: {
        type: Number,
        default: 30
      }
    }
  }
</script>
<style lang="scss">
  @import "src/styles/common.scss", "src/styles/variables.scss";
  .cls-picker__items {
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .cls-picker__highlight {
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    &::before{
      @extend .borderTop;
      border-color: $borderColor;
    }
    &::after{
      @extend .borderBottom;
      border-color: $borderColor;
    }
  }

</style>