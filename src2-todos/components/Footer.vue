<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="isSelectAll">
      </label>
      <span>
        <span>已完成{{completeCount}}/全部{{todos.length}}</span>
      </span>
      <button v-show="completeCount>0" class="btn btn-danger" @click="deleteSelect">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    todos:Array,
    updateTodos:Function,
    deleteSelect:Function
  },
  computed:{
      completeCount(){
         const {todos} = this
         return todos.reduce((previous, item) => previous +(item.complete? 1:0),0);
      },
      isSelectAll:{
        get(){
           const {completeCount,todos} = this
           return completeCount === todos.length && completeCount!==0
        },
        set(value){
          this.updateTodos(value)
        }
      }
  }

};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
