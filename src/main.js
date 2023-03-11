import { createApp } from "vue";
import "./assets/styles/app.css";
import Home from "./components/views/home/index.vue";
import axios from "./services/axios";

import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(Home);
app.use(Vue3TouchEvents);
app.provide("$axios", axios);
app.mount("#app");
