import { createApp } from 'vue'
import App from './App'
import router from './router'
import Rosi from '../src/index'

const ROSI = createApp(App)
ROSI.use(router).use(Rosi).mount('#app')
