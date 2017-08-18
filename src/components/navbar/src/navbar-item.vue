<template>
  <a class="cls-navbar__item" flex @click="tabClick" :class="{'cls-navbar__active': $parent.value === name}">
    <slot>
      <!-- 可以自定义tab标签的样式 -->
      <div class="cls-navbar__label">{{label}}</div>
    </slot>
  </a>
</template>

<script>
  import emitter from '@/utils/mixins/emitter.js'
  
  export default {
    name: 'navbar-item',

    mixins: [emitter],

    props: {
      label: String,
      name: String
    },

    methods: {
      tabClick () {
        this.dispatch('clsNavbar', 'switchTab', this.name)
      }
    }
  }
</script>


<style lang="scss">
  @import 'src/styles/variables.scss';

  .cls-navbar__item{
    display: block;
    text-align: center;
    padding: 10px 0 ;
  }

  .cls-navbar__label {
    font-size: 1rem;
    text-align: center;
    line-height: 1.8;
    color: $textColor;
  }

  .cls-navbar__active {
     border-bottom: 2px solid $lightBlue; 
     margin-bottom: -3px;
  }

  .cls-navbar__active > .cls-navbar__label{
    color: $success;
  }
</style>