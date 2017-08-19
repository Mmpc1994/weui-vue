<template>
  <div style="height: 100%">
    <button @click="show">open</button>
    <actionsheet v-model="visible">
      
    </actionsheet>
  </div>
</template>

<script>
  import actionsheet from '@/components/actionsheet'

  export default {
    name: 'example-actionsheet',

    components: { actionsheet },

    data () {
      return {
        visible: true
      }
    },

    methods: {
      show () {
        this.visible = !this.visible
      }
    }
  }
</script>