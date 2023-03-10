import { createApp } from "vue";
import "./assets/styles/app.css";
import Home from "./components/views/home/index.vue";
import axios from "./services/axios";

const app = createApp(Home);
app.provide("$axios", axios);
app.mount("#app");
