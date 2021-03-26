<template>
    <div class="mx-2">
        <h1 class="text-center text-lg my-1">
            Some Controls for pure CSS implementations
        </h1>
        <p class="my-1">button group:</p>
        <div class="bg-gray-900 p-2">
            <button
                class="bg-blue-300 px-4 py-2 border -mr-1 hover:bg-blue-500 rounded rounded-r-none"
            >
                left
            </button>
            <button class="bg-blue-300 px-4 py-2 border hover:bg-blue-500">
                middle
            </button>
            <button
                class="bg-blue-300 px-4 py-2 border -ml-1 hover:bg-blue-500 rounded rounded-l-none"
            >
                right
            </button>
        </div>

        <p class="mt-2 mb-1">chips:</p>
        <div class="bg-gray-900 p-2 flex space-x-2">
            <div
                class="bg-blue-300 rounded-full text-sx px-2 hover:bg-blue-500"
            >
                java
            </div>
            <div
                class="bg-blue-300 rounded-full text-sx px-2 hover:bg-blue-500 flex items-center"
            >
                javascript
                <svg
                    class="w-3 h-3 ml-1 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>

        <p class="mt-2 mb-1">dropdown:</p>
        <div class="bg-gray-900 p-2">
            <button class="bg-blue-300 px-4 py-2 rounded"
                @click="clickDrownMenu">Menu</button>
            <div
                class="bg-gray-200 flex flex-col rounded mt-1 p-2 text-sm w-32"
                v-show="isDropDown"
            >
                <a href="#" class="px-2 py-1 hover:bg-blue-300 rounded"
                    >Posts</a
                >
                <a href="#" class="px-2 py-1 hover:bg-blue-300 rounded"
                    >Profile</a
                >
                <a href="#" class="px-2 py-1 hover:bg-blue-300 rounded"
                    >Settings</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "CompName",
    setup() {
        const isDropDown = ref<boolean>(false);
        const clickDrownMenu = () => {
            isDropDown.value = !isDropDown.value;
        };
        return { isDropDown, clickDrownMenu };
    },
});
</script>

<style scoped></style>
