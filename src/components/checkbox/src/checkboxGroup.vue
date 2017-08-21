<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'clsCheckboxGroup',

    componentName: 'clsCheckboxGroup',

    props: {
      value: {}
    }
  }
</script>