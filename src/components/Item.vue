<template>
  <div>
    <li :style="{background:bgColor}" @mouseenter="handle('#cccccc',true)" @mouseleave="handle('#ffffff',false)" >
      <label>
        <input type="checkbox" v-model="todo.complete">
        <span>{{todo.title}}</span>
      </label>
      <button @click="deleteHandle(index)" class="btn btn-danger" v-show="isShow" >删除</button>
    </li>
  </div>
</template>

<script>
export default {
	props:{
		todo:Object,
    deleteTodo:{
      type:Function,
      required:true,
    },
    index:Number
  },
  data() {
    return {
      bgColor:'#ffffff',
      isShow:false
    }
  },
  methods: {
    handle(bgColor,isShow){
       this.bgColor = bgColor
       this.isShow = isShow
    },
    deleteHandle(index){
      if(window.confirm('确定要删除吗?')){
         this.deleteTodo(index)
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>