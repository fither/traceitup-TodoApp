import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css';

createApp(App).use(store).use(router).mount('#app');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: '/'})
        .then(() => console.log('service worker is registered'))
        .catch(e => console.log('failed to register service worker', e));
}
