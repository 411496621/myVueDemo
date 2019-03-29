/*包含n个直接更新状态数据的方法的集合*/
import {REQSUCESS,REQERROR,REQLOADING} from "./mutation-types"
export default {
  [REQSUCESS](state,{users}){
    state.isLoading = false
    state.users = users
  },
  [REQERROR](state){
     state.isLoading = false
     state.isError = true
  },
  [REQLOADING](state){
    state.users = []
    state.isLoading = true
    state.firstView = false
    state.isError = false
  }
}
