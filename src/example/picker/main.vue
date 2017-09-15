<template>
  <section>
    <clsPicker :values="currentValue">
    </clsPicker>
  </section>
</template>
<script>
  import clsPicker from '@/components/picker'
  import clsPickerItem from '@/components/picker-item'

  export default {
    name: 'example-picker',
    components: { clsPicker, clsPickerItem },
    data () {
      return {
        currentValue: [{
          value: [1, 2, 3, 4, 5, 6, 7, 8]
        }, {
          value: [11, 12, 13, 14, 15, 16, 17, 18]
        }]
      }
    }
  }
</script>