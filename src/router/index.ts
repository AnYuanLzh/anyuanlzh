import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from "vue-router";
import Home from '../pages/Home.vue';

//配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/calc",
        name: "calc",
        component: () => import("../pages/Calculator.vue"),
    },
    {
        path: "/calc_tw",
        name: "calc_tw",
        component: () => import("../pages/Calculator_tw.vue"),
    },
];
//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;