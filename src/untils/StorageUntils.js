
export default {
	   getStorage(){
			 return JSON.parse( localStorage.getItem('myTodos')||'[]')
		 },
		 setStorage(value){
			 return localStorage.setItem('myTodos',JSON.stringify(value))
		 }
}