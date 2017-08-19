<template>
  <div style="height: 100%"> 
    <button @click="show">Open Dialog</button>
    <alert v-model="alertVisible" :modal="true"></alert>
  </div>
</template>
<script>
  /* eslint-disable */
  const Alert = require('./test.vue');
  export default {
    components: { Alert },
    data() {
      return {
        alertVisible: true
      };
    },

    methods: {
      show () {
        this.alertVisible = !this.alertVisible
      }
    }
  };
</script>