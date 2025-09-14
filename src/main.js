// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { router } from './route'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
