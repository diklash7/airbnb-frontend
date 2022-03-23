import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// Styles
import './styles/style.scss'


const app = createApp(App)

app.config.globalProperties.$filters = {
   currencyUSD(amount) {
     // look implementation inside car-preview.vue
     return '$' + amount
   },
 }
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')