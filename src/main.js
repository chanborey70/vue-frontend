import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/main.css'
import { router } from './route'
import { createPinia } from 'pinia'
import 'preline'
import i18n from './I18n'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
