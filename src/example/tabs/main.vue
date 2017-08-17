<template>
  <clsTab>
    <tabbar-item slot label="微信" @click.native="go">
      <img :src="tabberIcon" slot="thumb">
    </tabbar-item>
    <tabbar-item slot label="通讯录">
      <img :src="tabberIcon" slot="thumb">
    </tabbar-item>
    <tabbar-item slot label="发现">
      <img :src="tabberIcon" slot="thumb">
    </tabbar-item>
    <tabbar-item slot label="设置">
      <img :src="tabberIcon" slot="thumb">
    </tabbar-item>
  </clsTab>
</template>

<script>
  import clsTab from '@/components/tabbar'
  import tabbarItem from '@/components/tabbar-item'

  import tabberIcon from '@/assets/img/icon_tabbar.png'

  export default {
    name: 'example-clsTab',

    components: { clsTab, tabbarItem },

    data () {
      return {
        tabberIcon
      }
    },

    methods: {
      go () {
        this.$router.push({
          name: 'hello'
        })
      }
    }
  }
</script>

<style lang="scss">
  .cls-tabbar__item {
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    padding: 5px, 0, 0;
    text-align: center;
  }
</style>