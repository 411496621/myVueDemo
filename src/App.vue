<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
				<Header :addTodo='addTodo'/>
				<List :deleteTodo='deleteTodo' :todos='todos' />
				<Footer :todos='todos' :updateTodos='updateTodos' :deleteSelect='deleteSelect'/>
			</div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components//List"
import untils from "./untils/StorageUntils"
export default {
	components:{
		Header,
		Footer,
		List
	},
	data() {
		return {
			todos:[]
		}
	},
  mounted(){
		setTimeout(() => {
			 this.todos = untils.getStorage()
		}, 1000);
	},
	methods: { /*状态数据定义在哪里 更新状态数据的方法就定义在哪里*/
	   addTodo(newTodo){
			 this.todos.unshift(newTodo)
		 },
		 deleteTodo(index){
			 this.todos.splice(index,1)
		 },
		 updateTodos(value) {
			 this.todos.forEach((item)=>{
				 item.complete = value
			 })
		 },
		 deleteSelect(){
			   this.todos = this.todos.filter((item)=>!item.complete)
		 }
	},
	watch:{
		todos:{
			deep:true,
			handler:untils.setStorage
		}
	}

};
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