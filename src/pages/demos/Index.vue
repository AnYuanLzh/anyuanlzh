<template>
    <div>
        <div class="bg-gray-500">
            <!-- <h1 class="text-center text-lg">一些小的Demos</h1> -->
            <!-- {{ $route.name }} -->
            <div
                class="my-0.5 text-sm text-center py-1 text-gray-100 flex flex-row flex-wrap gap-2 justify-center"
            >
                <router-link :to="{ name: 'calc' }" class="">
                    计算器
                </router-link>
                <router-link :to="{ name: 'calendar' }" class="lzh-nav-link">
                    日历
                </router-link>
                <!-- <router-link :to="{ name: 'login-register' }" class="lzh-nav-link">
                    登录&注册
                </router-link> -->
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import router from "../../router";

export default defineComponent({
    name: "DemoIndexComp",
    setup() {
        const route = useRoute();
        console.log("route", route.fullPath);
        router.push({name:'calc'});
        return {};
    },
});
</script>

<style scoped></style>
