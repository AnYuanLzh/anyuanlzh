<template>
    <div>
        <div class="bg-gray-500">
            <!-- <h1 class="text-center text-lg">一些小的Demos</h1> -->
            <div class="my-1 text-sm text-center py-1 text-gray-100
                flex flex-row flex-wrap gap-2 justify-center">
                <router-link :to="{ name: 'calc' }" class="">
                    计算器
                </router-link>
                <router-link :to="{ name: 'calendar' }" class="lzh-nav-link">
                    日历
                </router-link>
            </div>
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../../router";

export default defineComponent({
    name: "DemoIndexComp",
    setup() {
        router.push('calc')
        return {};
    },
});
</script>

<style scoped></style>
