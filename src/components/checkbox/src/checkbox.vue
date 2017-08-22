<template>
  <label>
    <input 
      type="checkbox"
      class="cls-checkbox__value" 
      :class="{'is-checked': isChecked}"
      @change="handleChange"
      :value="label"
      v-model="modal">
    <span class="cls-checkbox__core"></span>
    <span class="cls-checkbox__label">{{label}}</span> 
  </label>
</template>

<script>
  import emitter from '@/utils/mixins/emitter.js'
  
  export default {
    name: 'clsCheckbox',

    componentName: 'clsCheckbox',

    mixins: [emitter],

    props: {
      label: {
        type: String,
        require: true
      },
      value: {},
      checked: Boolean
    },

    computed: {
      modal: {
        get () {
          return this.isGroup ? this._checkboxGroup.value : this.value
        },
        set (val) {
          if (this.isGroup) {
            this.dispatch('clsCheckboxGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },

      isGroup () {
        let _parent = this.$parent
        while (_parent) {
          if (_parent.$options.componentName !== 'clsCheckboxGroup') {
            _parent = _parent.$parent
          } else {
            this._checkboxGroup = _parent
            return true
          }
        }
        return false
      },
      isChecked () {
        let _obj = {}
        if (_obj.toString.call(this.modal) === '[object Boolean]') {
          return this.modal
        } else if (Array.isArray(this.modal)) {
          return this.modal.indexOf(this.label) > -1
        }
        return false
      },

      store () {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value
      }
    },

    data () {
      return {
        _checkboxGroup: ''
      }
    },

    methods: {
      addStore () {
      },

      handleChange (ev) {
        this.$emit('change', ev)
        if (this.isGroup) {
          this.dispatch('clsCheckboxGroup', 'change', [this._checkboxGroup.value])
        }
      }
    },

    created () {
      // this.checked &&
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";

  .cls-checkbox__value {
    display: none;
    &.is-checked + .cls-checkbox__core {
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