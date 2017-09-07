<template>
  <div style="height: 100%; overflow: auto">
    <cls-loadmore :bottomMethod="topMethod" ref="loadmore">
      <div v-for="item in currentValue">{{item}}</div>
    </cls-loadmore>
  </div>

</template>

<script>
  import clsLoadmore from '@/components/loadmore'

  export default {
    name: 'example-clsLoadmore',

    components: { clsLoadmore },

    data () {
      return {
        currentValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      }
    },

    methods: {
      topMethod () {
        setTimeout(() => {
          [].push.apply(this.currentValue, ['1', '2', '3', '4', '5', '6', '7'])
          this.$refs.loadmore.onBottomLoaded()
          this.$forceUpdate()
        }, 500)
      }
    }
  }
</script>