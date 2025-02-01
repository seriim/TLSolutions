import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; // Import the CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure you are using css-loader


const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount('#app');
