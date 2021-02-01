import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/scss/index.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();
createApp(App).use(store).use(router).mount('#app')
