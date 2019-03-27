<template>
  <div>
    <h2 v-show="firstView">请输入关键字进行搜索</h2>
    <h2 v-show="isLoading">请求中...</h2>
    <h2 v-show="isError">请求失败</h2>
    <div  class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.head" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  import axios from "axios"
  export default {
    data () {
      return {
        users:[],
        isLoading:false,
        isError:false,
        firstView:true
      }
    },
    mounted () {
      PubSub.subscribe('searchName',async(msg,searchName)=>{
        this.isLoading = true
        this.users = []
        this.firstView = false
        this.isError = false
        try {
          const response = await axios.get(`https://api.github.com/search/users?q=${searchName}`)
          const data = response.data
          this.isLoading = false
          this.users = data.items.map(item=>({username:item.login,head:item.avatar_url,url:item.html_url}))

        }catch (e) {
          this.isError = true
          this.isLoading = false
        }

      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
