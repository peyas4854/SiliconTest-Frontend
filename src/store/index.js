import {createStore} from "vuex";
import JwtService from "@/service/jwt.service";
import router from "@/router";

export default createStore({
    state: {
        user: {},
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        },
    },
    mutations: {
        SET_USER(state, data) {
            return state.user = data
        },
        REDIRECT_AFTER_LOGIN(state, user) {
            router.push({name: 'home'});
            JwtService.saveLoggedUser('user')
        },
        LOG_OUT(state,data){
            return state.user = data
        }
    },
    actions: {},
});
