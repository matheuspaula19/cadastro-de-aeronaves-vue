import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/popper.min.js';


/* AXIOS */ 
window.axios = axios;
axios.defaults.baseURL = 'http://localhost:8082/';
createApp(App).mount('#app')
