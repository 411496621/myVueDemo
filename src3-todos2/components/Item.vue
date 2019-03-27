<template>
  <li :style="{background:bgColor}" @mouseenter="handleShow('#cccccc',true)" @mouseleave="handleShow('#ffffff',false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button @click="handleDelete" class="btn btn-danger" v-show="isShow" >删除</button>
  </li>
</template>

<script>
  import PubSub from "pubsub-js"

  export default {
    props:{
      todo:Object,
      index:Number
    },
    data () {
      return {
        bgColor:"#ffffff",
        isShow:false
      }
    },
    methods: {
      handleShow (bgColor,isShow) {
        this.bgColor = bgColor
        this.isShow = isShow
      },
      handleDelete(){
        if(window.confirm("确定要删除吗?")){
          PubSub.publish('deleteTodo',this.index)
        }
      }
    },
  }
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
