import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import './assets/style/main.css';

import FrontPageLayout from './layouts/FrontPageLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

import { FontAwesomeIcon } from './plugins/font-awesome';

const app = createApp(App);

app.component('default-layout', FrontPageLayout);
app.component('empty-layout', EmptyLayout);
app.component('fa', FontAwesomeIcon);

app.use(router);

app.mount('#app');
