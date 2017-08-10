<template>
  <div class="dropdown">
    <slot></slot>
    <slot name="dropdown"></slot>
  </div>
</template>

<script>
  import Emitter from '@/mixins/emitter.js'

  export default {
    name: 'dropdown',

    mixins: [Emitter],

    data () {
      return {
        visible: false,
        timeout: null
      }
    },

    props: {
      trigger: {
        type: String,
        default () {
          return 'click'
        }
      }
    },

    methods: {
      // 改变状态, 通过watch触发子组件的事件
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = true
        }, 250)
      },

      // 隐藏
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = false
        }, 150)
      },

      // 点击按钮触发
      handleClick () {
        this.visible = !this.visible
      },

      // 点击slot 进来的组件可以触发事件
      initEvent () {
        let triggerElm = this.$slots.default[0].elm
        let { hide, show, trigger, handleClick } = this

        if (trigger === 'hover') {
          triggerElm.addEventListener('mouseenter', show)
          triggerElm.addEventListener('mouseleave', hide)
        } else if (trigger === 'click') {
          triggerElm.addEventListener('click', handleClick)
        }
      }
    },

    watch: {
      visible (val) {
        // 向下触发
        this.broadcast('DropdownMenu', 'visible', val)

        // 提供接口
        this.$emit('visible-change', val)
      }
    },

    mounted () {
      this.initEvent()
    }
  }
</script>

<style lang="scss">
  .dropdown{
    position: relative;
  }
</style>
