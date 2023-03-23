import { createApp } from "vue";
import "./assets/styles/app.css";
import store from "./store/index";
import Vue3TouchEvents from "vue3-touch-events";

import Tooltip from "./components/views/tooltip/index.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faInfo, faUser);

const app = createApp(Tooltip);
app.use(Vue3TouchEvents);
app.use(store);

app.component("f-icon", FontAwesomeIcon);
app.mount("#app");
