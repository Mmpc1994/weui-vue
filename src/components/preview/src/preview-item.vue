<template>
  <div class="cls-preview__item">
    <label for="" class="cls-preview__label">{{label}}</label>
    <div class="cls-preview__value">
      <slot>{{value}}</slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'preview-item',
    props: {
      label: [String, Number],
      value: [String, Number]
    }
  }
</script>
