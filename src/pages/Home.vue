<template>
    <div class="">
        <div class="text-center">这主要要用来练习: javascript css tailwindcss vue vuex</div>
        <div class="flex justify-center items-center ">
            <img alt="Vue logo" src="../assets/imgs/vue-logo.png" />
            <img alt="tailwind logo" src="../assets/imgs/tailwind-logo.png" />
        </div>
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
export default defineComponent({
    name: "CompName",
    components: {
        HelloWorld,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
