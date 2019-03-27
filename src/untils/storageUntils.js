export default {
  readTodos(){
    return JSON.parse(localStorage.getItem('myTodos')||'[]')
  },
  writeTodos(value){
    localStorage.setItem('myTodos',JSON.stringify(value))
  }
}
