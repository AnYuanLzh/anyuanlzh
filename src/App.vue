<template>
    <div class="container mx-auto">
        <div class="nav text-center bg-gray-200 py-2">
            <router-link :to="{ name: 'home' }">首页</router-link>
            <span class="p-2">|</span>
            <router-link :to="{ name: 'calc' }">计算器</router-link>
            <span class="p-2">|</span>
            <router-link :to="{ name: 'calc_tw' }">计算器tw</router-link>
            <span class="p-2">|</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
});
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
