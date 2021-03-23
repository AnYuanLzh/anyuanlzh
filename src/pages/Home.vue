<template>
    <div class="bg-gray-50">
        <!-- <div class="flex justify-center items-center">
            <img
                class="h-14 rounded-full"
                alt="logo"
                src="../assets/imgs/logo.jpg"
            />
        </div> -->
        <div class="p-2">
            <!-- <div class="text-center">
                致2021以前一直做的游戏开发工作。<br>
                这主要要用来练习: javascript css tailwindcss vue vuex
            </div> -->
            <div class="my-2 py-2">
                <p>至2021以前一直做的游戏开发工作...</p>
                <p>
                    最近在学习一些web技术和框架，比如: 
                    js, es, ts, css, tailwindcss, vue, vuex, nodejs ...
                </p>
                <p>
                    弄这么个静态主页，可以展示一下学习到的一些小例子小demo什么。
                </p>
                <p>
                    选择托管在gitee上（而不是放在github还是觉得gitee在国内访问还是要快一点）。
                </p>
                <p>如果对这个主面的工程感觉兴趣可以点击：<a href="https://gitee.com/anyuanlzh"
                        target: _blank>源码</a> 查看。</p>
            </div>
            <h2 class="mt-6 font-bold">这个主页主要使用的web技术：</h2>
            <hr class="my-2" />
            <ul>
                <li>
                    <a 
                        target: _blank
                        href="https://v3.cn.vuejs.org/" class="lzh-a"
                        >Vue3</a
                    >
                    <p>
                        当然也用来到了它的 vue-router, vuex。
                    </p>
                </li>

                <li>
                    <a
                        target: _blank
                        class="lzh-a"
                        href="https://vitejs.dev/"
                        >Vite</a
                    >
                    <p>
                        现在主要在Notion上作笔记，也推荐大家使用，个人觉得是个不错的工具。
                    </p>
                </li>

                <li>
                    <a
                        target: _blank
                        class="lzh-a"
                        href="https://tailwindcss.com/"
                        >Tailwindcss</a
                    >
                    <p>
                        Tailwind CSS 是一个工具集 CSS 框架，这个真的是不要太香，推荐使用。
                    </p>
                </li>
            </ul>
            <h2 class="mt-6 font-bold">个人博客：</h2>
            <hr class="my-2"/>
            <ul>
                <li>
                    <a
                        target: _blank
                        href="https://blog.csdn.net/AnYuanLzh" class="lzh-a"
                        >在csdn上的博客</a
                    >
                    <p>
                        这个就是注册的比较早，后面也没有换其它的平台，当然现在不用了，在上面的东西也不愿意转移了,就留个链接在这个吧.
                        以后应该不会上csdn上写东西了，以后主要用下面说的那个Notion了。
                    </p>
                    <p></p>
                </li>

                <li>
                    <a
                        target: _blank
                        class="lzh-a"
                        href="https://www.notion.so/Web-3af47ec871664539bf9efdeb6924daad"
                        >在Notion上的笔记</a
                    >
                    <p>
                        现在主要在Notion上作笔记，也推荐大家使用，个人觉得是个不错的工具。
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "CompName",
    components: {},
    setup() {
        return {};
    },
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {

    ul {
        @apply list-disc ml-4;
    }
    a {
        @apply underline text-gray-700;
    }
    p{
        text-indent:2em;
    }
}
</style>
