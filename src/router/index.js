import {createRouter, createWebHistory} from "vue-router";

// FrontEnd
import FrontEndLayout from '../views/frontend/Layout';
import FrontEndRoutes from '../views/frontend/routes';
//404
import NotFound from '../components/404';

const routes = [
    //==========Frontend routing==========
    {
        path: '/',
        component: FrontEndLayout,
        children: FrontEndRoutes
    },

    //==========404  routing==========
    {
        path: '/:catchAll(.*)',
        name: 'Not Found',
        component: NotFound,
        meta: {
            title: 'Not Found'
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
