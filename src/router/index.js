import Vue from 'vue'
import Router from 'vue-router'
import Body from 'components/Body'
import test from 'components/Vleft'

Vue.use(Router);

export default new Router({
  hashbang:false,
  history:true,
  routes: [
    {
      path: '/:id',
      name: 'Body',
      component: Body
    }
  ]
})
