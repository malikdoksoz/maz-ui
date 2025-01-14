import App from './App.vue'

import '@package/tailwindcss/css/tailwind.css'
import '@package/plugins/aos/scss/index.scss'
import '@/css/main.css'

import { createApp } from 'vue'
import { vZoomImgInstall, vZoomImgOptions } from '@package/directives'
import {
  installToaster,
  ToasterOptions,
  installAos,
  AosOptions,
  installWait,
} from '@package/plugins'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const vLazyImgOptions: vZoomImgOptions = {
  disabled: false,
  scale: true,
  blur: true,
}

app.use(vZoomImgInstall, vLazyImgOptions)

app.provide('mazIconPath', './maz-icons')

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [{ path: '/', component: App }],
})

app.use(router)

const toasterOptions: ToasterOptions = {
  persistent: false,
  position: 'bottom-right',
  timeout: 3000,
}

const options: AosOptions = {
  router,
  animation: {
    once: false,
  },
}

app.use(installToaster, toasterOptions)
app.use(installAos, options)
app.use(installWait)

app.mount('#app')
