<template>
  <div style="height: 100%">
      <clsButton @click="open">button</clsButton>
  </div>
</template>

<script>
  import Toast from '@/components/toast'
  import clsButton from '@/components/button'
  
  export default {
    name: 'example-toast',
    components: { clsButton },
    methods: {
      open () {
        Toast()
      }
    }
  }
</script>
