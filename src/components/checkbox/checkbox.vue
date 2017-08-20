<template>
  <label @change="change">
    <input type="checkbox" class="cls-checkbox__value" v-model="currentValue">
    <span class="cls-checkbox__core"></span>
    <span class="cls-checkbox__label">{{label}}</span> 
  </label>
</template>

<script>
  export default {
    name: 'clsCheckbox',

    props: {
      name: String,
      label: {
        type: String,
        require: true
      },
      value: Array
    },

    data () {
      return {
        currentValue: this.value
      }
    },

    methods: {
      change (value) {
        if (this.currentValue) {
          // this.$emit('input', this.label)
        }
        // console.log(value)
      }
    },

    watch: {
      currentValue (val) {
        this.$emit('input', this.label)
      }
    },

    created () {

    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";

  .cls-checkbox__value {
    display: none;
    &:checked + .cls-checkbox__core {
      background-color: $primary;
      border-color: $primary;
      &::after {
        border-color: $white;
        transform: rotate(45deg) scale(1); 
      }
    }
  }

  .cls-checkbox__core {
    display: inline-block;
    background-color: $darkWhite; 
    border-radius: 5px;
    border: 1px solid #ccc;
    position: relative;
    height: 20px;
    width: 20px;
    vertical-align: middle;
    &::after {
      border: 2px solid transparent;
      border-left: 0;
      border-top: 0;
      content: " ";
      position: absolute;
      top: 0;
      right: 6px;
      width: 4px;
      height: 12px;
      transform: rotate(45deg) scale(0); 
      transition: transform .2s;
    }
  }
</style>