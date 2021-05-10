import { createApp } from 'vue';

import App from './App.vue';
import './assets/style/main.css';

import { registerSW } from 'virtual:pwa-register';
registerSW();

import { FontAwesomeIcon } from './plugins/font-awesome';

const app = createApp(App);

app.component('fa', FontAwesomeIcon);

app.mount('#app');
