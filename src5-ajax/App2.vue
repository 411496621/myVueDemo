<template>
  <div>
    <div v-show="name">most star repo is <a :href="url">{{name}}</a></div>
    <div v-show="!name">loading...</div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data () {
      return {
        name:'',
        url:''
      }
    },
    async mounted(){
      /*try {
        const response = await this.$http.get('https://api.github.com/search/repositories?q=r&sort=stars')
        this.name =  response.data.items[0].name
        this.url = response.data.items[0].html_url

      }catch (e) {
        alert('请求失败了')
      }*/
      try {
        const response = await axios('https://api.github.com/search/repositories?q=v&sort=stars')
        this.name =  response.data.items[0].name
        this.url = response.data.items[0].html_url

      }catch (e) {
        alert('请求失败了')
      }
    }
  }
</script>

<style scoped>

</style>
