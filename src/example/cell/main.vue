<template>
  <cells>
    <cell value="mpc" label="姓名"></cell>
    <cell value="男" label="性别"></cell>
    <cell value="21" label="年龄"></cell>
    <cell value="工程师" label="工作"></cell>
  </cells>

</template>

<script>
  import cells from '@/components/cells'
  import cell from '@/components/cell'
  
  export default {
    name: 'example-cell',

    components: { cells, cell }

  }
</script>