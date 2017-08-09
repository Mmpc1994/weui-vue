<template>
  <transition name="popup">
    <div class="popup" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  import Popup from 'vue-popup';
  import 'vue-popup/lib/popup.css';

  export default {
    name: 'popup',
    mixins: [Popup],
    props: {
      visible: Boolean
    }
  };
</script>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .popup{
    overflow: scroll;
    position: fixed;
    background: $colorWhite;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backface-visibility: hidden;
    transition: 0.2s ease-out;
  }
  .popup-enter, .popup-leave-active{
    transform: translate3d(100%, -50%, 0)
  }
</style>
