import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Styles
// import './scss/styles.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
