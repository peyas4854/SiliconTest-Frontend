import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import './scss/main.scss'
//Font Awsome
import {library}         from "@fortawesome/fontawesome-svg-core";
import {fas}             from '@fortawesome/free-solid-svg-icons'

library.add(fas);
import {fab}             from '@fortawesome/free-brands-svg-icons';

library.add(fab);
import {far}             from '@fortawesome/free-regular-svg-icons';

library.add(far);
import {dom}             from "@fortawesome/fontawesome-svg-core";

dom.watch();

createApp(App).use(store).use(router).mount("#app");
