<template>
    <div class="flex flex-row justify-center my-4">
        <div class="w-60 bg-green-50">
            <div class="text-gray-500 text-xl cursor-pointer">
                <span
                    :class="{ CheckedTab: isLoginChecked }"
                    @click="isLoginChecked = true"
                    >Login</span
                >
                <span> / </span>
                <span
                    :class="{ CheckedTab: !isLoginChecked }"
                    @click="isLoginChecked = false"
                    >Sign Up</span
                >
            </div>
            <form class="space-y-1">
            <div>
                <input class="lzh-input" type="text" />
            </div>
            <div>
                <input class="lzh-input" type="text" />
            </div>
            <div>
                <input class="lzh-input" type="text" />
            </div>
            <div>
                <input class="lzh-input" type="text" />
            </div>
            <span>Forget? </span>
            <button class="border border-black px-2 bg-gray-300">LOGIN</button>
        </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "LoginRegister-0",
    setup() {
        const isLoginChecked = ref<boolean>(true);

        return { isLoginChecked };
    },
});
</script>

<style scoped>
@layer utilities {
    .CheckedTab {
        color: rgb(181, 154, 254);
    }
    .lzh-input {
        @apply border border-gray-600;
    }
}
</style>
