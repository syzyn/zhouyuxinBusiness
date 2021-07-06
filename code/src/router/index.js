import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/components/GoodsList'
import Shopcart from '@/components/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    
    { path: '/',name:'GoodList',component:GoodList},
    { path:'/shopcart',name:'Shopcart',component:Shopcart},
    
  ]
})
