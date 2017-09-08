<template>

  <div class="page">
    <clsButton type="primary" size="large" @click="test">测试按钮</clsButton>
    <clsButton                size="large">测试按钮</clsButton>
    <clsButton type="danger"  size="large">测试按钮</clsButton>
    <clsButton type="warning" size="large">测试按钮</clsButton>
    <clsButton type="success" size="large">测试按钮</clsButton>

    <div layout>
      <div flex>
        <clsButton type="success" :disabled="true" size="small">测试按钮</clsButton>
        <clsButton type="warning"  size="small" :loading="true">测试按钮</clsButton>
        <clsButton type="danger"  size="small">测试按钮</clsButton>
        <clsButton type="primary"  size="small">测试按钮</clsButton>
      </div>
    </div>

    <div>
      <clsButton type="warning"  size="normal">测试按钮</clsButton>
      <clsButton type="danger"  size="normal">测试按钮</clsButton>
      <clsButton type="primary"  size="normal">测试按钮</clsButton>
    </div>
  </div>

</template>

<script>
  import clsButton from '@/components/button'

  export default {
    name: 'example-button',

    components: { clsButton },

    methods: {
      test (e) {
        console.log(e)
        window.alert('hello')
      }
    }
  }
</script>

<style lang="scss">
  .page {
    padding: 0 15px;

    .cls-button {
      margin-bottom: 10px;
    }
  }
</style>