import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import HistogramSlider from 'vue3-histogram-slider'
import 'vue3-histogram-slider/dist/histogram-slider.css'
// Styles
import './styles/style.scss'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.config.globalProperties.$filters = {
    currencyUSD(amount) {
        return '$' + amount
    },
}
app.use(router)
app.use(store)
app.use(ElementPlus)

app.use(VueGoogleMaps, {
    load: {
        key: '',
    }
})
app.component(HistogramSlider.name, HistogramSlider)

app.mount('#app')