import { createApp } from 'vue'
import App from './App.vue'

import { i18n } from './i18n';

export const app = createApp(App)
  .use(i18n);

app.mount('#app');
