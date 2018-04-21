
import Main from './components/Home.vue'
import Parent from './components/Home/Parent.vue'


export default [
    {
        path: '/',
        component: Parent,
        children: [
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: 'home',
                component: require('./components/Home/Main.vue')
            },
            {
                path: 'admin',
                component: require('./components/Admin/Main.vue')
            }
        ]

    }
]