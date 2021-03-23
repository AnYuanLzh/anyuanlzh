<template>
    <div class="relative">
        <div class="relative w-44">
            <input
                type="text"
                :value="value"
                placeholder="yyy/mm/dd"
                class="w-full pl-1 pr-8 py-0.5"
            />
            <button
                @click="clickDateBtn"
                class="w-5 absolute inset-y-0.5 right-0.5"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            </button>
        </div>
        <div v-if="isShowDateDrop"
            class="absolute w-56 h-60 bg-gray-100 mt-1">

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "CompName",
    props: {
        value:{
            type:Date,
            default:()=>new Date(),
        },
        width:{
            type:Number,
            default:240,
        },
        height:{
            type:Number,
            default:300,
        }
    },
    setup() {
        const isShowDateDrop = ref<boolean>(false);
        const clickDateBtn = (): void => {
            isShowDateDrop.value = !isShowDateDrop.value;
        };
        return {
            isShowDateDrop,
            clickDateBtn,
        };
    },
});
</script>

<style scoped></style>
