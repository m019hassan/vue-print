import "bootstrap/dist/css/bootstrap.min.css"
import 'devextreme/dist/css/dx.light.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
// import "./scss/main.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


import "bootstrap/dist/js/bootstrap.min.js"