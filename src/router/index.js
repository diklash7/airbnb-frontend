import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import aboutPage from '../views/about-page.vue'
import explorePage from '../views/explore-page.vue'
import stayDetails from '../views/stay-details.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/about',
            name: 'about',
            component: aboutPage
        },
        {
            path: '/explore',
            name: 'explore',
            component: explorePage
        },
        {
            path: '/explore/:id',
            name: 'stay-details',
            component: stayDetails,
        },
    ]
})

export default router