<template>
  <div>
    <clsRadio :label="names[0]" v-model="chose" name="test">mpc</clsRadio>
    <clsRadio :label="names[1]" v-model="chose" name="test">zzj</clsRadio>
    <clsRadio :label="names[2]" v-model="chose" name="test">wdg</clsRadio>
    <clsRadio :label="names[3]" v-model="chose" neme="test">sxm</clsRadio>
  </div>

</template>
<script>
  import clsRadio from '@/components/radio'
  
  export default {
    name: 'example-radio',

    components: { clsRadio },

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