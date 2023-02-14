import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { Icon } from '@iconify/vue';

const app = createApp(App)

app.use(router)
app.use(store) // Con app.use usamos el modulo 'store'
// Damos libre acceso al componente Icon,
// desde cualquier apartado de la aplicación.
app.component("Icon", Icon)

app.mount('#app')
