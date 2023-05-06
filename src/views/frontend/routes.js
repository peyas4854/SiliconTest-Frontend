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
