import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw,
} from "vue-router";
import Home from "../pages/Home.vue";

//配置路由
const routes: Array<RouteRecordRaw> = [
    // {
    //     path: "/:pathMatch(.*)",
    //     name: "notfound",
    //     component: () => import("../pages/NotFound.vue"),
    // },
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
        path: "/calendar",
        name: "calendar",
        component: () => import("../pages/Calendar.vue"),
    },
    {
        path: "/csslayout",
        name: "csslayout",
        component: () => import("../pages/CssLayout.vue"),
    },
    {
        path: "/css_controls",
        name: "css_controls",
        component: () => import("../pages/CssControls.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../pages/About.vue"),
    },
    {
        path: "/404",
        name: "notfound",
        component: () => import("../pages/NotFound.vue"),
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/404",
    },
];
//创建路由
const router = createRouter({
    history: createWebHistory("/"),
    routes,
});
export default router;
