import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import print from '../views/print.vue';
import dragDrop from '../views/dragDrop.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
   path: "/print",
   name: "print",
   component: print 
  },
  {
   path: "/dragDrop",
   name: "dragDrop",
   component: dragDrop 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
