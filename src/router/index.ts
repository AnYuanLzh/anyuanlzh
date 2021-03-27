import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw,
} from "vue-router";
import Home from "../pages/Home.vue";

//配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: Home,
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

    {
        path: "/demos",
        name: "demos",
        component: () => import("../pages/demos/Index.vue"),
        children: [
            {
                path: "/calc",
                name: "calc",
                component: () => import("../pages/demos/Calculator.vue"),
            },
            {
                path: "/calendar",
                name: "calendar",
                component: () => import("../pages/demos/Calendar.vue"),
            },
        ],
    },

    {
        path: "/tailwind",
        name: "tailwind",
        component: () => import("../pages/tailwind/Index.vue"),
        children: [
            {
                path: "/flex-layout",
                name: "flex-layout",
                component: () => import("../pages/tailwind/FlexLayout.vue"),
            },
            {
                path: "/grid-layout",
                name: "grid-layout",
                component: () => import("../pages/tailwind/GridLayout.vue"),
            },
            {
                path: "/css-position",
                name: "css-position",
                component: () => import("../pages/tailwind/CssPosition.vue"),
            },
            {
                path: "/css-controls",
                name: "css-controls",
                component: () => import("../pages/tailwind/CssControls.vue"),
            },
        ],
    },

    {
        path: "/element-plus",
        name: "element-plus",
        component: () => import("../pages/element-plus/Index.vue"),
        children: [
            // {
            //     path: "/xx",
            //     name: "xxx",
            //     component: () => import("../pages/element-plus/xxx.vue"),
            // },
        ],
    },

    {
        path: "/bootstrap",
        name: "bootstrap",
        component: () => import("../pages/bootstrap/Index.vue"),
        children: [
            // {
            //     path: "/xx",
            //     name: "xxx",
            //     component: () => import("../pages/bootstrap/xxx.vue"),
            // },
        ],
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
