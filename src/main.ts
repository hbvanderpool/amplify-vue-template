import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
// @ts-ignore
import router from './router'
// @ts-ignore
import store from './store'

Amplify.configure(outputs);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
