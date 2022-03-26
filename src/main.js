import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Styles
import './styles/style.scss'


const app = createApp(App)

app.config.globalProperties.$filters = {
  currencyUSD(amount) {
    return '$' + amount
  },
}
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')