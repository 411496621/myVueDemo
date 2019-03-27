<template>
  <div>
   <ul>
     <li>id: {{message.id}}</li>
     <li>title: {{message.title}}</li>
     <li>content: {{message.content}}</li>
   </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages:[
          {id:1,title:'messages001',content:'message content 001'},
          {id:2,title:'messages002',content:'message content 002'},
          {id:4,title:'messages004',content:'message content 004'},
        ],

      }
    },
    computed:{
      message(){
        const {$route} = this
        const id = $route.params.id * 1
        return this.messages.find(item=>item.id===id)
      }
    },
  }
</script>

<style scoped>

</style>
