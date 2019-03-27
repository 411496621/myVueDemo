<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo"/>
        <List :todos="todos"/>
        <Footer>
          <input slot="left" type="checkbox" v-model="isSelectAll"/>
          <span slot="middle">已完成{{seletedCount}}/ 全部{{todos.length}}</span>
          <button slot="right" @click="deleteSelected" class="btn btn-danger" v-show="seletedCount>0">清除已完成任务</button>
        </Footer>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  import Header from './components/Header'
  import Footer from './components/Footer'
  import List from './components/List.vue'
  import storageUntils from "./untils/storageUntils"


  export default {
    mounted(){
      PubSub.subscribe('deleteTodo',(msg,index)=>{
        this.todos.splice(index,1)
      })
      setTimeout(()=>{
        this.todos = storageUntils.readTodos()
      },1500)
    },
    components: {
      Header,
      Footer,
      List
    },
    data () {
      return {
        todos:[]
      }
    },
    methods: {
      addTodo (newTodo) {
        this.todos.unshift(newTodo)
      },
      updateSelectAll(isSelectAll){
        this.todos.forEach(item=>item.complete = isSelectAll)
      },
      deleteSelected(){
        this.todos = this.todos.filter(item=>!item.complete)
      }
    },
    computed: {
      seletedCount () {
        const {todos} = this
        return todos.reduce((previous,item)=>previous+(item.complete?1:0),0)
      },
      isSelectAll:{
        get(){
          const {seletedCount,todos} = this
          return seletedCount === todos.length && todos.length!==0
        },
        set(value){
          this.updateSelectAll(value)
        }
      }
    },
    watch:{
      todos:{
        deep:true,
        handler:storageUntils.writeTodos
      }
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
