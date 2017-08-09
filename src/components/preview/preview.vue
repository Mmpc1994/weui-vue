<template>
  <section class="preview">
    <div class="preview_hd">
      <div class="preview_item">
        <label for="" class="preview_label">{{label}}</label>
        <em class="preview_value">{{value}}</em>
      </div>
    </div>
    <div class="preview_bd">
      <slot></slot>
    </div>
    <div class="preview_ft">
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
  .preview{
    position: relative;
    background: $colorWhite;
    &::before{
      @extend .borderTop;
    }
  }
  .preview_hd{
    position: relative;
    padding: 10px 15px;
    line-height: 2.5em;
    text-align: right;
    &::after{
      @extend .borderBottom;
      left: 8px;
    }
  }
  .preview_bd{
    padding: 10px 15px;
    text-align: right;
    color: $textColor;
    line-height: 2;
  }
  .preview_ft{
    text-align: center;
    position: relative;
    padding-bottom: 40px;
    &::before{
      @extend .borderTop;
    }
    /* .el-button{
      width: 80%;
      margin-top: 100px;
    } */
  }
  .preview_item{
    overflow: hidden;
  }
  .preview_label{
    float: left;
    margin-left: 1em;
    min-width: 4em;
    color: $textColor;
    text-align: justify;
    text-align-last: justify;
  }
  .preview_value{
    display: block;
    overflow: hidden;
    word-break: normal;
    word-wrap: break-word;
  }
</style>
