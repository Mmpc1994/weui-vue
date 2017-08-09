<template>
  <a class="cell" layout="row" layout-align="center center" @click="go">
    <div class="cell_hd">
      <slot name="thumb"></slot>
    </div>
    <div class="cell_bd" flex>
      <p>{{label}}</p>
    </div>
    <div class="cell_ft" :class="{'link' : link}">
      <slot name="value">{{value}}</slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'cell',
    props: {
      value: String,
      label: String,
      to: [Object, String],
      link: {
        default() {
          return true;
        }
      }
    },
    methods: {
      go() {
        if (!this.to) {
          return;
        }
        this.$router.push(this.to);
      }
    }
  };
</script>

<style lang="scss">
  @import "src/styles/index.scss"; 
  .cell {
    padding:  10px 15px;
    position: relative;
    &::after {
      @extend .borderBottom;
    }
  }
  .cell_bd {
    color: $colorDark;
  }

  .cell_ft {
    text-align: right;
    color: $textColor;
    padding-right: 13px;
    position: relative;
  }

  .link{
    &::after {
      content: " ";
      display: inline-block;
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: #C8C8CD;
      border-style: solid;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
      z-index:2;
    }
  }

</style>
