import { createApp } from 'vue'
import App from './App'
import router from './router'
import Button from '../src/components/button'

const ROSY = createApp(App)
ROSY.use(router).use(Button).mount('#app')
