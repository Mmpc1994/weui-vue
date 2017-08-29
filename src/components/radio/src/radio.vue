<template>
  <label>
    <input 
      type="radio" 
      class="cls-radio__value" 
      :class="{'is-checked': isChecked}"
      :value="label"
      v-model="modal"
      :name="name">
      <span class="cls-radio__core"></span>
      <span class="cls-radio__label">
        <slot></slot>
      </span> 
  </label>

</template>

<script>
  export default {
    name: 'clsRadio',

    props: {
      name: String,
      label: {
        require: true
      },
      value: {}
    },

    computed: {
      modal: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      },
      isChecked () {
        return this.modal === this.label
      }
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";

  .cls-radio__value {
    display: none;
    &.is-checked + .cls-radio__core {
      &::after {
        border-color: $white;
        transform: scale(1); 
      }
    }
  }

  .cls-radio__core {
    display: inline-block;
    background-color: $darkWhite;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    border: 1px solid #ccc;

    &::after {
      content: " ";
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: $primary;
      border-radius: 100%;
      top: 0;
      right: 0;
      transform: scale(0);
      transition: all 0.2s;
    }

    &::before {
      z-index: 2;
      content: " ";
      position: absolute;
      height: 10px;
      width: 10px;
      right: 5px;
      top: 5px;
      border-radius: 100%;
      background-color: $white;
    }
  }
</style>
