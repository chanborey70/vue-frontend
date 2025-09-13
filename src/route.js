// import { createMemoryHistory, createRouter } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'


// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'
import Home from './pages/Home.vue'
import Project from './pages/project/Index.vue'
import ProjectDetail from './pages/project/Project-Detail.vue'
import Blog from './pages/Blog.vue'
import Collection from './components/Collection.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  // { path: '/project', component: Project },
  { path: '/project', component: Project, children: [
    // no id
    { path: '', component: Collection },
    // with id
    { path: ':id', component: ProjectDetail },
  ] },
  { path: '/blog', component: Blog },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  linkActiveClass: 'font-bold',
  routes,
})