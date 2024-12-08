import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from './../views/LoginPage';
import DashboardPage from './../views/DashboardPage.vue';

const routes = [
    { path: '/', name: 'Login', component: LoginPage },
    { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
