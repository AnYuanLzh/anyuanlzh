<template>
    <div>
        <div>
            <!-- <router-link :to="{ name: 'csslayout' }" class="lzh-nav-link">
                css布局
            </router-link>
            <span class="p-2">|</span>
            <router-link :to="{ name: 'css_controls' }" class="lzh-nav-link">
                css controls
            </router-link> -->
        </div>
        <h1 class="text-center text-lg">ElementPlus练习页面</h1>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ElementPlusIndexComp",
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
