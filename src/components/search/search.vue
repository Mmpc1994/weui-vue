<template>
  <div layout="row" layout-align="center center" class="search-bar">
    <form flex class="search_form">
      <div class="search-bar_box">
        <input placeholder="搜索" type="search" class="search_input" id="search_input">
      </div>
      <label for="search_input" class="search_label" @click="handleFocusEvent" v-show="!isFocus" v-model="search">
        <span>搜索</span>
      </label>
    </form>
    <a class="search_cancel" @click="cancel" v-show="isFocus">取消</a>
  </div>
</template>
<script>
  export default {
    name: 'search',
    data() {
      return {
        isFocus: false,
        search: ''
      };
    },
    methods: {
      handleFocusEvent() {
        this.isFocus = true;
      },
      cancel() {
        this.isFocus = false;
      }
    }
  };

</script>
<style lang="scss">
  @import "src/styles/index.scss";
  .search-bar{
    position: relative;
    padding: 8px 10px;
    background: $backgroundColor;
    .search_form {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        border-radius: 10px;
        transform: scale(0.5);
        transform-origin: 0 0;
        background: $colorWhite;
      }
    }
    .search-bar_box{
      position: relative;
      padding-left: 30px;
      padding-right: 30px;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
    .search_input {
      padding: 4px;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      border: 0;
      box-sizing: content-box;
      background: transparent;
      outline: none;
    }
    .search_label {
      position: absolute;
      line-height: 2rem;
      text-align: center;
      border-radius: 3px;
      background-color: $colorWhite;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      z-index: 2;
      span {
        display: inline-block;
        vertical-align: bottom;
        margin: auto;
      }
    }
    .search_cancel {
      display: block;
      margin-left: 10px;
    }
  }
</style>
