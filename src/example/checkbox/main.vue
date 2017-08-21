<template>
  <!-- <input type="checkbox"> -->
  <div>
    <clsCheckboxGroup v-model="choseList">
      <clsCheckbox v-model="one" name="goods" label="选项1"></clsCheckbox>
      <clsCheckbox v-model="two" name="goods" label="选项1"></clsCheckbox>
      <clsCheckbox v-model="three" name="goods" label="选项1"></clsCheckbox>
    </clsCheckboxGroup>
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
        one: 'xiaoming',
        two: 'dengguang',
        three: 'junjun'
      }
    }
  }
</script>