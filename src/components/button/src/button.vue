<template>
  <a class="cls-button" :class="['cls-button__' + type, 'cls-button__' + size, {
    'is-disabled': disabled
  }]" @click="handleClick">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'clsButton',

    props: {
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'danger',
            'primary',
            'warning',
            'success'
          ].indexOf(value) > -1
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return [
            'small',
            'normal',
            'large'
          ].indexOf(value) > -1
        }
      },
      disabled: Boolean
    },

    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/styles/variables.scss';

  .cls-button {
    position: relative;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
    text-align: center;
    line-height: 2.5555556;
    text-decoration: none;
    box-sizing: border-box;
    padding-left: 14px;
    padding-right: 14px;
    outline: 0;
    border: none;
    font-size: 1.4rem;
    color: #fff;
    &::after {
      content: " ";
      background-color: #000;
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &:not(.is-disabled):active::after {
      opacity: .4;
    }
  }

  .cls-button__default {
    background-color: $default;
    color: $dark;
    border: 1px solid $borderColor;
  }

  .cls-button__primary {
    background-color: $primary;
    color: $white;
  }

  .cls-button__danger {
    background-color: $danger;
    color: $white;
  }

  .cls-button__success {
    background-color: $success;
    color: $white;
  }

  .cls-button__warning {
    background-color: $warning;
    color: $white;
  }

  .cls-button__normal {
    display: inline-block;
    padding: 0 12px;
  }

  .cls-button__small {
    display: inline-block;
    padding: 1 12px;
    font-size: 1.2rem;
  }

  .cls-button__large {
    display: block;
  }

  .cls-button.is-disabled {
    cursor: not-allowed;
    background-image: none;
    background-image: none;
    background-color: $bgDisable;
    border-color: #d1dbe5;
  }
</style>