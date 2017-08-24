<template>
  <div>
    <clsCheckboxGroup v-model="choseList">
      <clsCheckbox label="选项1" :trueValue="test"></clsCheckbox>
      <clsCheckbox label="选项2" :trueValue="example"></clsCheckbox>
      <clsCheckbox label="选项3"></clsCheckbox>
    </clsCheckboxGroup>

    <clsCheckbox v-model="currentValue" label="选项3" :trueValue="test" :falseValue="example"></clsCheckbox>

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
        },
        a: 1,
        b: 3,
        currentValue: {}
      }
    }
  }
</script>