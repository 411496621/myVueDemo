<template>
  <div>
    <ul>
      <li v-for="(item,index) in msg" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg:['news001','news002','news003']
      }
    }
  }
</script>

<style scoped>

</style>
