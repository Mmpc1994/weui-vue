<template>
  <div class="cls-carousel__item"
  :class="{
    'cls-carousel__active': active,
    'cls-carousel__amimate': animating
  }"
  :style="{
    msTransform: `translateX(${ translate }px)`,
    webkitTransform: `translateX(${ translate }px)`,
    transform: `translateX(${ translate }px)`
  }">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'clsCarouselItem',
    data () {
      return {
        active: false,
        animating: false,
        translate: 0
      }
    },

    methods: {
      transformItem (index, activeIndex, oldIndex) {
        const parentWidth = this.$parent.$el.offsetWidth
        const length = this.$parent && this.$parent.items.length
        if (oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex
        }
        index = this.processIndex(index, activeIndex, length)

        this.active = index === activeIndex
        this.translate = parentWidth * (index - activeIndex)
      },

      processIndex (index, activeIndex, length) {
        if (index === length - 1 && activeIndex === 0) {
          return -1
        } else if (index === 0 && activeIndex === length - 1) {
          return length
        }
        // 不知道为什么要这么做
        // else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        //   return length + 1
        // } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        //   return -2
        // }
        return index
      }
    },

    created () {
      this.$parent && this.$parent.getItems()
    },

    beforeDestroyed () {
      this.$parent && this.$parent.getItems()
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";

  .cls-carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    z-index: 0;
    background-color: $lightBlue;
    overflow: hidden;
    
  }
  .cls-carousel__active{
    z-index: 2;
  }
  .cls-carousel__amimate{
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  
</style>
