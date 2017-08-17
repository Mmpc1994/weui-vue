<template>
  <div class="cls-tab">
    <div class="cls-tab__panel">
      <slot name="main">
        <router-view></router-view>
      </slot>
    </div>
    <div class="cls-tabbar" layout="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import tabbarItem from './tabbar-item.vue'
  export default {
    name: 'cls-tab',

    components: { tabbarItem }
  }
</script>

<style lang="scss">
  @import 'src/styles/variables.scss';

  .cls-tabbar {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: $darkWhite;
  }
</style>