import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/Home"
import About from "../views/About"
import Messages from "../views/Messages"
import News from "../views/News"
import Message from "../views/Message"


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'messages',
          component:Messages,
          children:[
            {
              path:':id',
              component:Message
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
