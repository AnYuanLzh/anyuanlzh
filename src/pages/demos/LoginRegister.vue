<template>
    <div>
        <!-- <h1>登录和注册</h1> -->
        <div class="flex flex-row flex-wrap gap-2 justify-center">
            <button
                class="bg-blue-300 px-2 py-1"
                v-for="(compName, i) in state.lgComps"
                :key="i"
                @click='curLgComp = compName'
            >
                {{ compName }}
            </button>
        </div>
        <component :is="curLgComp"></component>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import LoginRegister0 from "../../components/demos/LoginRegister0.vue";
import LoginRegister1 from "../../components/demos/LoginRegister1.vue";
import LoginRegister2 from "../../components/demos/LoginRegister2.vue";

export default defineComponent({
    name: "CompName",
    components: {
        LoginRegister0,
        LoginRegister1,
        LoginRegister2,
    },
    setup() {
        const state = reactive({
            lgComps: ["LoginRegister-0", "LoginRegister-1", "LoginRegister-2"],
        });
        const curLgComp = ref("LoginRegister-0");
        return {
            state,
            curLgComp,
        };
    },
});
</script>

<style scoped></style>
