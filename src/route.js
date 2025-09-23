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

// Import the module (typescript types are removed in Javascript)
import {HSStaticMethods} from 'preline' 

// Declaring the global window property
window.HSStaticMethods = HSStaticMethods

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

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'font-bold',
  routes
})
// Set up the navigation guard after router is created
router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100)
})
export { router, routes }
