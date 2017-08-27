<template>
  <preview>
    <preview-item label="价格" value="¥32"></preview-item>
    <preview-item label="姓名" value="mpc"></preview-item>
    <preview-item label="红包" value="-22"></preview-item>
    <preview-item label="优惠券" value="¥32"></preview-item>
    <preview-item label="手机" value="13388492837"></preview-item>
  </preview>
</template>
<script>
  import preview from '@/components/preview'
  import previewItem from '@/components/preview-item'

  export default {
    name: 'example-preview',

    components: { preview, previewItem }
  }
</script>