<template>
  <div class="preview_item">
    <label for="" class="preview_label">{{label}}</label>
    <div class="preview_value">
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
  };
</script>
