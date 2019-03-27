import Vue from "vue"
import {Button} from "mint-ui"
import App from "./App"

Vue.component(Button.name,Button)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App />'
})
