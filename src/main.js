import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
   
import { useIntersectionObserver } from '@vueuse/core'
//引入初始化样式文件
import './styles/common.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy' , {
    mounted (el, binding) {
        console.log(el, binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if (isIntersecting) {
                    el.src = binding.value
                }
            },
        )
    }
})
