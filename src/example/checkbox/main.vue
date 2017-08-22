<template>
  <div>
    <clsCheckboxGroup v-model="choseList">
      <clsCheckbox label="选项1"></clsCheckbox>
      <clsCheckbox label="选项2"></clsCheckbox>
      <clsCheckbox label="选项3"></clsCheckbox>
    </clsCheckboxGroup>

    <clsCheckbox v-model="three" label="选项3"></clsCheckbox>
  </div>

</template>

<script>
  import clsCheckbox from '@/components/checkbox'
  import clsCheckboxGroup from '@/components/checkboxGroup'
  
  export default {
    name: 'example-checklist',

    components: { clsCheckbox, clsCheckboxGroup },

    data () {
      return {
        choseList: [],
        test: {
          name: 1
        },
        example: {
          name: 2
        }
      }
    }
  }
</script>