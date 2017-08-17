<template>
  <div class="cls-tab">
    <div class="cls-navbar" layout>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import "src/styles/variables";

  .cls-navbar{
    position: absolute;
    width: 100%;
    top: 0;
    background-color: $darkWhite;
  }
</style>