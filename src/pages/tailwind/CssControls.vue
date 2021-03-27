<template>
    <div class="mx-2">
        <h1 class="text-center text-lg my-1">
            Some Controls for pure CSS implementations
        </h1>
        <p class="my-1">button group:</p>
        <div class="bg-gray-900 p-4">
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
        <div class="bg-gray-900 p-4 flex space-x-2">
            <div
                class="bg-blue-300 rounded-full text-sx px-3 hover:bg-blue-500"
            >
                java
            </div>
            <div
                class="bg-blue-300 rounded-full text-sx px-3 hover:bg-blue-500 flex items-center"
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
        <div class="bg-gray-900 p-4 ">
            <div class="relative">
                <button
                    class="bg-blue-300 px-4 py-1 rounded"
                    @click="clickDrownMenu"
                >
                    Menu
                </button>
                <div
                    class="absolute left-0 top-8 z-10 bg-gray-200 border-gray-400 border-2 shadow flex flex-col rounded mt-1 p-1 text-sm w-32"
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

        <p class="mt-2 mb-1">list:</p>
        <div class="bg-gray-900 p-4">
            <ul class="bg-gray-200 rounded w-36 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                <li class="px-3 py-1 flex flex-row justify-between items-center">list item1
                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
                </li>
                <li class="px-3 py-1 flex flex-row justify-between items-center">list item2
                </li>
                <li class="px-3 py-1 flex flex-row justify-between items-center">Messages
                    <div class="text-xs px-1 rounded-full bg-gray-800 text-gray-200">4+</div>
                </li>
                <li class="px-3 py-1 flex flex-row justify-between items-center">list item4
                </li>
                <li class="px-3 py-1 flex flex-row justify-between items-center">list item5
                </li>
            </ul>
        </div>

        <p class="mt-2 mb-1">tooltip:</p>
        <div class="bg-gray-900 p-4">
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
