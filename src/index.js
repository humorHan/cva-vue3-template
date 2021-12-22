import { createApp } from 'vue';
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue';
import initRouter from './routes/index.js';

const router = initRouter();

const app = createApp(App);

app.use(router)
  .mount('#app');
