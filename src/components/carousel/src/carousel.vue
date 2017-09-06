<template>
  <div class="cls-carousel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'clsCarousel',

    props: {
      interval: {
        type: Number,
        default () {
          return 2000
        }
      },
      autoplay: {
        type: Boolean,
        default () {
          return true
        }
      },
      initialIndex: {
        type: Number,
        default () {
          return 0
        }
      }
    },

    data () {
      return {
        items: [],
        activeIndex: -1
      }
    },

    methods: {
      getItems () {
        this.items = this.$children.filter(item => {
          return item.$options.name === 'clsCarouselItem'
        })
      },

      startTimer () {
        if (this.interval <= 0 || !this.autoplay) return
        this.timer = setInterval(this.playSlides, this.interval)
      },

      playSlides () {
        if (this.activeIndex < this.items.length - 1) {
          this.activeIndex ++
        } else {
          this.activeIndex = 0
        }
      },
  
      resetItemPosition (oldVal) {
        this.items.forEach((item, index) => {
          item.transformItem(index, this.activeIndex, oldVal)
        })
      }
    },

    watch: {
      activeIndex (val, oldVal) {
        this.resetItemPosition(oldVal)
      }
    },

    mounted () {
      this.getItems()
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        // 触发一次watcher
        this.activeIndex = this.initialIndex
      }
      this.$nextTick(this.startTimer)
    }
  }
</script>

<style lang="scss">
  .cls-carousel {
    height: 200px;
    position: relative;
    overflow: hidden;
  }
</style>