<template>
    <div class="container mx-auto">
        <div class="bg-gray-800 relative">
            <div class="lzh-header-bg pl-4 flex items-center gap-2 py-2">
                <div>
                    <img
                        class="h-14 rounded-full"
                        alt="logo"
                        src="./assets/imgs/logo.jpg"
                    />
                </div>
                <div class="my-2">
                    <p class="text-lg text-white">AnYuanLzh</p>
                    <p class="text-sm text-gray-300">
                        All things are difficulty before they are easy !
                    </p>
                </div>
            </div>
            <div class="bg-gray-500 text-sm text-center py-1 text-gray-100">
                <router-link :to="{ name: 'home' }" class="lzh-link">
                    首页
                </router-link>
                <span class="p-2">|</span>
                <router-link :to="{ name: 'calc' }" class="lzh-link">
                    计算器
                </router-link>
                <span class="p-2">|</span>
                <router-link :to="{ name: 'calendar' }" class="lzh-link">
                    日历
                </router-link>
                <span class="p-2">|</span>
            </div>
        </div>
        <router-view></router-view>
        <div class="bg-gray-500 text-gray-100 h-10">
            <p class="text-center leading-10">footer</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "./router";

export default defineComponent({
    name: "App",
    setup(x, context) {

        /************* begin ****** for github page's spa */
        let path = localStorage.getItem("path");
        if (path) {
            console.log("app-path:",path);
            localStorage.removeItem("path");
            router.push('/');
        }
        /************* end ******* for github page's spa */
    },
});
</script>

<style>
html {
    font-size: 16px;
}
body {
    background: #e3e3e3;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
}
@layer utilities {
    .lzh-link {
        /* 需要在tailwind.config.js中为textColor开启visited变体 */
        @apply hover:text-blue-300 visited:text-pink-300;
    }
}
</style>
