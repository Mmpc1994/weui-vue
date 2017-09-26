<template>
  <section style="height: 100%">
    <div layout="row">
      <cls-button type="success" flex @click="open">open</cls-button>
    </div>
    <clsActionSheet :visible.sync="show" @close="close">
      <clsPicker>
        <clsPickerItem slot :values="currentValue[0].value" v-model="province" flex></clsPickerItem>
        <clsPickerItem slot :values="currentValue[0].value" v-model="city" flex></clsPickerItem>
        <clsPickerItem slot :values="currentValue[0].value" v-model="area" flex></clsPickerItem>
      </clsPicker>
    </clsActionSheet>
  </section>
</template>
<script>
  import clsPicker from '@/components/picker'
  import clsPickerItem from '@/components/picker-item'
  import clsActionSheet from '@/components/actionsheet'
  import clsButton from '@/components/button'

  export default {
    name: 'example-picker',
    components: { clsPicker, clsPickerItem, clsActionSheet, clsButton },
    data () {
      return {
        currentValue: [{
          value: [1, 2, 3, 4, 5, 6, 7, 8]
        }, {
          value: [11, 12, 13, 14, 15, 16, 17, 18]
        }],
        province: '',
        city: '',
        area: '',
        show: false
      }
    },
    methods: {
      open () {
        this.show = true
      },
      close () {
        this.show = false
      }
    }
  }
</script>