<template>
  <!-- <input type="checkbox"> -->
  <div>
    <clsCheckbox v-model="choseList" name="goods" label="选项1"></clsCheckbox>
    <clsCheckbox v-model="choseList" name="goods" label="选项2"></clsCheckbox>
    <clsCheckbox v-model="choseList" name="goods" label="选项3"></clsCheckbox>
    <clsCheckbox v-model="choseList" name="goods" label="选项4"></clsCheckbox>
  </div>

</template>

<script>
  import clsCheckbox from '@/components/checkbox'
  
  export default {
    name: 'example-checklist',

    components: { clsCheckbox },

    data () {
      return {
        choseList: ['选项1', '选项2']
      }
    }
  }
</script>