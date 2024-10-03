import './assets/main.css'

import { useCounterStore } from "../src/stores/counter.js"
import { createPinia } from 'pinia'
import { createApp } from 'vue'


import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const counterStore = useCounterStore()

app.mount('#app')
