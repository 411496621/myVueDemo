<template>
  <div>
    <mt-button @click="handleClick" type="primary" style="width: 100%">xxx</mt-button>

  </div>
</template>

<script>
  import {Toast} from "mint-ui"
  export default {
    methods: {
      handleClick () {
        Toast("ok")
      }
    },
  }
</script>

<style scoped>

</style>
