<template>
  <div class="cls-carousel__item"
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
        const length = this.$parant && this.$parant.items.length
        this.animating = index === activeIndex || index === oldIndex

        index = this.processIndex(index, activeIndex, length)

        this.active = index === activeIndex
        this.translate = parentWidth * (index - activeIndex)
      },

      processIndex (index, activeIndex, length) {
        if (activeIndex === length - 1 && index === 0) {
          return length - 1
        } else if (index === length - 1 && activeIndex === 0) {
          return -1
        }
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
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
</style>
