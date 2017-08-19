<template>
  <transition name="actionsheet">
    <div class="cls-actionsheet" v-show="currentValue">
      <div class="cls-actionsheet__title">
        这是一个标题
      </div>
      <slot>
        <a class="cls-actionsheet__cell">示例菜单</a>
        <a class="cls-actionsheet__cell">示例菜单</a>
        <a class="cls-actionsheet__cell">示例菜单</a>
        <a class="cls-actionsheet__cell">示例菜单</a>
        <a class="cls-actionsheet__cell">示例菜单</a>
      </slot>
      <div class="cls-actionsheet__action">
        <a class="cls-actionsheet__cell">取消</a>
      </div>
    </div>
  </transition>

</template>

<script>
  import Popup from 'vue-popup'
  import 'vue-popup/lib/popup.css'

  export default {
    name: 'actionsheet',

    mixins: [Popup],

    data () {
      return {
        currentValue: false
      }
    },

    props: {
      modal: {
        default: true
      },

      showModal: {
        type: Boolean,
        default: true
      },

      modalFade: {
        default: false
      },

      closeOnClickModal: {
        default: true
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
      },

      currentValue (val) {
        this.$emit('input', val)
      }
    },

    mounted () {
      if (this.value) {
        this.rendered = true
        this.currentValue = true
        this.open()
      }
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";

  .cls-actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    backface-visibility: hidden;
    z-index: 1000;
    width: 100%;
    left: 50%; 
    transform: translate3d(-50%, 0, 0); 
  }

  .cls-actionsheet__title {
    position: relative;
    height: 65px;
    padding: 0 20px;
    line-height: 1.4;
    color: $textColor;
  }

  .cls-actionsheet__action {
    margin-top: 6px;
    background-color: #FCFCFD;
  }

  .cls-actionsheet__cell {
    position: relative;
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    display: block;
  }

  .actionsheet-enter-active,
  .actionsheet-leave-active {
    transition: all .3s ease;
  }

  .actionsheet-enter,
  .actionsheet-leave-to {
    transform: translate3d(-50%, 100%, 0);
  }
</style>