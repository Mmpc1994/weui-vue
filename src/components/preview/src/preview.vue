<template>
  <section class="cls-preview">
    <div class="cls-preview__hd">
      <div class="cls-preview__item">
        <label for="" class="cls-preview__label">{{label}}</label>
        <em class="cls-preview__value">{{value}}</em>
      </div>
    </div>
    <div class="cls-preview__bd">
      <slot></slot>
    </div>
    <div class="cls-preview__ft">
      <slot name="ft">
      </slot>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'preview',
    props: {
      label: String,
      value: String
    }
  };
</script>
<style lang="scss">
  @import "src/styles/index.scss"; 
  .cls-preview{
    position: relative;
    background: $colorWhite;
    &::before{
      @extend .borderTop;
    }
  }
  .cls-preview__hd{
    position: relative;
    padding: 10px 15px;
    line-height: 2.5em;
    text-align: right;
    &::after{
      @extend .borderBottom;
      left: 8px;
    }
  }

  .cls-preview__bd{
    padding: 10px 15px;
    text-align: right;
    color: $textColor;
    line-height: 2;
  }

  .cls-preview__ft{
    text-align: center;
    position: relative;
    padding-bottom: 40px;
    &::before{
      @extend .borderTop;
    }
  }

  .cls-preview__item{
    overflow: hidden;
  }
  
  .cls-preview__label{
    float: left;
    margin-left: 1em;
    min-width: 4em;
    color: $textColor;
    text-align: justify;
    text-align-last: justify;
  }
  .cls-preview__value{
    display: block;
    overflow: hidden;
    word-break: normal;
    word-wrap: break-word;
  }
</style>
