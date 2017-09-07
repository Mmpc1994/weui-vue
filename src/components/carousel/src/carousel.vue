<template>
  <div class="cls-carousel"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <slot></slot>
    <ul class="cls-carousel__indicators">
      <li v-for="(item, index) in items" class="cls-carousel__indicator">
        <button class="cls-carousel__button" 
          :class="{
            'cls-carousel__active': index === activeIndex
          }"
          @click.stop="handleIndicatorClick(index)"></button>
      </li>
    </ul>
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

      pauseTimer () {
        clearInterval(this.timer)
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
      },

      handleIndicatorClick (index) {
        this.activeIndex = index
      },

      handleMouseEnter () {
        // this.hover = true
        this.pauseTimer()
      },

      handleMouseLeave () {
        // this.hover = false
        this.startTimer()
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

  .cls-carousel__indicators {
    position: absolute;
    list-style: none;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 0;
    z-index: 2;
  }

  .cls-carousel__indicator {
    display: inline-block;
    padding: 12px 4px;
    cursor: pointer;
  }

  .cls-carousel__button {
    display: block;
    opacity: .48;
    width: 30px;
    height: 2px;
    background-color: #fff;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
  }
  .cls-carousel__active{
    opacity: 1;
  }
</style>