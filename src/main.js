import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'

import { GetCategory } from './apis/testAPI'
GetCategory().then(res => {
    console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
