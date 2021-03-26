<template>
    <div class="pl-4">
        <h1 class="text-center pt-2 pb-1">简单的日历</h1>
        <div>
            <h2 class="font-bold">原生的日期组件:</h2>
            <input type="date" /><br /><br />

            <h2 class="font-bold">vue3+ts实现的日期组件:</h2>
            <p class="pb-1 text-gray-400 text-xs underline italic">
                有参考：https://www.bilibili.com/video/BV1k4411C7DX?from=search&seid=7343710285072819819
            </p>
            <DataPickerComp
                :open="false"
                :value="pickDate"
                @onchange="onPickerChange"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import DataPickerComp from "../components/DatePickerComp.vue";
export default defineComponent({
    name: "Calendar",
    components: {
        DataPickerComp,
    },
    setup() {
        const pickDate = ref<Date>(new Date());
        const onPickerChange = (newDate:Date):void=>{
            pickDate.value = newDate;
        }

        return {
            pickDate,
            onPickerChange
        };
    },
});
</script>

<style scoped></style>
