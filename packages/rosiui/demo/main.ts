import { createApp } from 'vue'
import App from './App'
import router from './router'
import { RButton } from '../src/components/index'

const ROSY = createApp(App)
ROSY.use(router).use(RButton).mount('#app')
