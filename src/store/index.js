import {createStore} from "vuex";
import JwtService from "@/service/jwt.service";
import router from "@/router";
import ApiService from "@/service/api.service";

export default createStore({
    state: {
        user: {},
        cartItem: [],
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        },
        getCartItem(state) {
            return state.cartItem;
        },
        cartQuantityCount(state) {
            return state.cartItem.length;
        }

    },
    mutations: {
        SET_USER(state, data) {
            return state.user = data
        },
        REDIRECT_AFTER_LOGIN(state, user) {
            router.push({name: 'home'});
            JwtService.saveLoggedUser('user')
        },
        LOG_OUT(state, data) {
            return state.user = data
        },
        SET_CART(state, product) {
            state.cartItem =  product;
            console.log(product);

        }
    },
    actions: {
        getCart(context) {
            ApiService.get(`/cart`, ).then(response => {
                console.log('res', response.data.data);
                context.commit('SET_CART', response.data.data)
            }).catch(error => {
                console.log(error, 'error')
            }).finally(() => {
                // context.commit("LOADER", false)
            });
        },
    },
});
