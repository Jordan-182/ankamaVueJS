import { createApp } from 'vue'
import WebFont from 'webfontloader'
import App from './App.vue'
import './assets/main.css'

WebFont.load({
  google: {
    families: ['Roboto:400,700', 'Bebas Neue', 'Lato:400,900', 'Dosis'],
  },
})

createApp(App).mount('#app')
