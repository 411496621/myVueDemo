<template>
  <div>
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <router-link :to="`/home/messages/${message.id}`">{{message.title}}</router-link>
        <button @click="$router.push(`/home/messages/${message.id}`)">push查看</button>
        <button @click="$router.replace(`/home/messages/${message.id}`)">replace 查看</button>
      </li>
    </ul>
    <button @click="$router.back()">BACK</button>
    <router-view />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages:[]
      }
    },
    mounted(){
      setTimeout(()=>{
        this.messages = [
          {id:1,title:'messages001'},
          {id:2,title:'messages002'},
          {id:4,title:'messages004'},
        ]
      },1000)
    }
  }
</script>

<style scoped>

</style>
