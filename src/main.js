import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import './scss/main.scss'
//Font Awsome
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(far);
import {dom} from "@fortawesome/fontawesome-svg-core";

dom.watch();

//services
import ApiService from "@/service/api.service";
import * as JwtService from "@/service/jwt.service";

ApiService.init();

// Global Loader Spinner
import {RotateSquare2} from 'vue-loading-spinner'

// route check
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!JwtService.getToken()) {
            next({
                name: 'login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            console.log('go next')
            next()
        }
    } else if (JwtService.getLoggedUser() == 'user') {
        authUser();
    }
    if (to.name == 'login') {
        if (JwtService.getToken()) {
            next({
                name: 'home',
                params: {nextUrl: to.fullPath}
            })
        }
    }

    //Logged user data return then commit in vuex
    function authUser() {
        ApiService.get(`/user`).then(response => {
            console.log('cal user', response.data);
            store.commit("SET_USER", response.data);
            next()
        }).catch(error => {
            next({name: `login`})
        })
    }

    //Logged user data return then commit in vuex
    next();
    Vue.nextTick(() => {
        document.title = `${to.meta.title} - ${process.env.VUE_APP_TITLE}` || process.env.VUE_APP_TITLE
    })
});
// vue instance
const app = createApp(App)
app.config.globalProperties.$filters = {
    currencyTK(value) {
        return 'Tk. ' + value
    }
}
app.use(store)
    .use(router)
    .component('loader',RotateSquare2)
    .mount("#app");
