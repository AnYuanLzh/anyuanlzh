<template>
    <div>
        <div class="bg-gray-500">
            <!-- <h1 class="text-center text-lg">Tailwindcss练习页面</h1> -->
            <div
                class="my-1 text-sm text-center py-1 text-gray-100 flex flex-row flex-wrap gap-2 justify-center"
            >
                <router-link :to="{ name: 'flex-layout' }" class="lzh-nav-link">
                    flex布局
                </router-link>
                <router-link :to="{ name: 'grid-layout' }" class="lzh-nav-link">
                    grid布局
                </router-link>
                <router-link
                    :to="{ name: 'css-position' }"
                    class="lzh-nav-link"
                >
                    css-position
                </router-link>
                <router-link
                    :to="{ name: 'css-controls' }"
                    class="lzh-nav-link"
                >
                    css-controls
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
    name: "TailWaindIndexComp",
    setup() {
        router.push("flex-layout");

        return {};
    },
});
</script>

<style scoped></style>
