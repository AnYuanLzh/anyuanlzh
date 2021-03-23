<template>
    <div class="pb-6">
        <h1 class="text-center pt-2 pb-1">简单的日历</h1>
        <div>
            <h2 class="font-bold">原生的日期组件:</h2>
            <input type="date" /><br /><br />

            <h2 class="font-bold">vue3实现的日期组件:</h2>
            <data-comp :value="curDate" :width='208' :height='36' />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import DataComp from "../components/DateComp.vue";
export default defineComponent({
    name: "Calendar",
    components: {
        DataComp,
    },
    setup() {
        const curDate = ref<Date>(new Date());

        return {
            curDate,
        };
    },
});
</script>

<style scoped></style>
