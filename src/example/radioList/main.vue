<template>

  <clsCells>
    <clsCell label="选项A" :link="false">
      <clsRadio slot="value" v-model="chose" :label="names[0]"></clsRadio>
    </clsCell>
    <clsCell label="选项A" :link="false">
      <clsRadio slot="value" v-model="chose" :label="names[1]"></clsRadio>
    </clsCell>
    <clsCell label="选项A" :link="false">
      <clsRadio slot="value" v-model="chose" :label="names[2]"></clsRadio>
    </clsCell>
    <clsCell label="选项A" :link="false">
      <clsRadio slot="value" v-model="chose" :label="names[3]"></clsRadio>
    </clsCell>
  </clsCells>

</template>

<script>
  import clsCells from '@/components/cells'
  import clsCell from '@/components/cell'
  import clsRadio from '@/components/radio'

  export default {
    name: 'example-radioList',

    components: {clsCells, clsCell, clsRadio},

    data () {
      return {
        names: [
          {test: 1},
          {test: 2},
          {test: 3},
          {test: 4}
        ],
        chose: 'aa'
      }
    }
  }
</script>
