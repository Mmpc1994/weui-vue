<template>
  <div v-show="value" class="alert">
    <p>Alert!</p>
  </div>
</template>
<style>
  .alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
<script>
  /* eslint-disable */
  import Popup from 'vue-popup';
  import 'vue-popup/lib/popup.css';
  
  export default {
      name: 'alert',
      mixins: [Popup],
      props: {
        modal: {
          default: true
        },
        // visible: Boolean,
        closeOnClickModal: {
          default: true
        }
      }
    };
</script>