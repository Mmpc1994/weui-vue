<template>
  <div style="height: 100%">
    <clsButton @click.native="show">open</clsButton>
    <actionsheet v-model="visible">

    </actionsheet>
  </div>
</template>

<script>
  import actionsheet from '@/components/actionsheet'
  import clsButton from '@/components/button'

  export default {
    name: 'example-actionsheet',

    components: { actionsheet, clsButton },

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