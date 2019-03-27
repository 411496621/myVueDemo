<template>
  <div>
    <div class="container">
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import List from "./components/List.vue"
  export default {
    components:{
      Search,
      List
    }
  }
</script>

<style scoped>

</style>
