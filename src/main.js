// import Vue from "vue";
import { createApp } from "vue";
import App from "./App";
import router from "./assets/routes/index.js";

createApp(App).use(router).mount("#app");