const FrontendRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home'),
        meta     : {
            title: 'Home'
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./pages/Cart'),
        meta     : {
            title: 'Cart',
            requireAuth: true,
        }
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/About'),
        meta     : {
            title: 'About'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login'),
        meta     : {
            title: 'Login',
        }
    },

]

export default FrontendRoutes;
