<template>
  <div style="height: 100%">
    <navbar v-model="activeTab">
      <navbarItem label="选项1" name="tab1"></navbarItem>
      <navbarItem label="选项2" name="tab2"></navbarItem>
      <navbarItem label="选项3" name="tab3"></navbarItem>
    </navbar>

    <div style="margin-top: 50px">
      <div v-if="activeTab === 'tab1'">1</div>
      <div v-if="activeTab === 'tab2'">2</div>
      <div v-if="activeTab === 'tab3'">3</div>
    </div>

  </div>

</template>

<script>
  import navbar from '@/components/navbar'
  import navbarItem from '@/components/navbar-item'

  export default {
    name: 'example-navbar',

    components: { navbar, navbarItem },

    data () {
      return {
        activeTab: 'tab2'
      }
    }
  }
</script>
