
/*包含n个间接更新状态数据的方法的对象的集合*/
import {REQLOADING,REQERROR,REQSUCESS} from "./mutation-types"
import axios from "axios"
export default {
  async reqUsers({commit},searchName){
    /*发送数据之前 更新状态数据*/
    commit(REQLOADING)
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios.get(url)
      const users = response.data.items.map(item=>{
        return {username:item.login,head:item.avatar_url,url:item.html_url}
      })
      commit(REQSUCESS,{users})

    }catch (e) {
      /*更新状态*/
      commit(REQERROR)
    }
  }
}
