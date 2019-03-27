<template>
  <div>
    <div class="todo-header">
      <input v-model="todoName" @keyup.enter="handle"  type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        todoName:''
      }
    },
    methods: {
      handle () {
        const todoName = this.todoName.trim()
        if(!todoName){
           return
        }
        // 創造一個新的todo對象
        const todo = {complete:false,title:todoName}
        // 触发相关的回调函数 添加新的todo
        this.$emit('addTodo',todo)
        // 清空todoName
        this.todoName = ''
      }
    },
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
