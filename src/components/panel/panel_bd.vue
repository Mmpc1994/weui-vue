<template>
  <a class="panel_bd" layout="row" layout-align="center center">
    <div v-if="thumb" class="panel-box_hd">
      <img :src="brand" alt="">
    </div>
    <div class="panel-box_bd" flex>
      <h4 class="panel-box_title">{{title}}</h4>
      <p  class="panel-box_desc">{{desc}}</p>
      <p  class="panel-box_foot">
        <slot name="foot">{{label}}</slot>
      </p>
    </div>
  </a>
</template>
<script>
  import brand from '@/assets/logo.png';

  export default {
    name: 'panel_bd',
    data() {
      return {
        brand
      };
    },
    props: {
      thumb: {
        type: Boolean,
        default() {
          return true;
        }
      },
      title: String,
      desc: String,
      label: String
    }
  };
</script>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .panel_bd{
    padding: 15px;
    position: relative;
    &::before {
      @extend .borderBottom;
      left: 15px;
    }
  }
  .panel-box_hd{
    margin-right: .8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    img {
      width: 100%;
      max-height: 100%;
      vertical-align: top;
    }
  }
  .panel-box_title {
    @include textOverflowCut;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    height: 1.7rem;
    width: auto;
    overflow: hidden;
    color: $colorDark;
  }
  .panel-box_desc{
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: $textColor;
  }
</style>
