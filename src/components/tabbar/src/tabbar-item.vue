<template>
  <a flex class="cls-tabbar__item">
    <slot name="thumb" class="cls-tabbar__icon"></slot>
    <p class="cls-tabbar__label">{{label}}</p>
  </a>
</template>

<script>
  export default {
    name: 'cls-tabbar-item',

    props: {
      label: String,
      to: [String, Object]
    },

    methods: {
      go () {
        this.$router.push(this.to)
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/styles/variables.scss';

  .cls-tabbar__item {
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    padding: 5px 0 0 0;
    text-align: center;
  }

  .cls-tabbar__item img, .cls-tabbar__icon {
    display: inline-block;
    width: 27px;
    height: 27px;
  }

  .cls-tabbar__label {
    font-size: 1rem;
    text-align: center;
    line-height: 1.8;
    color: $textColor;
  }
</style>
