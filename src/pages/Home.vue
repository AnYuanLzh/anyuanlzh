<template>
    <div class="bg-gray-50 py-6 px-2">
        <div class="my">
            <!-- <p>至2021以前一直做的游戏开发工作...</p> -->
            <p>
                最近在学习一些web技术和框架，比如: 
                js, es, ts, css, tailwindcss, vue, vuex, nodejs ...
            </p>
            <p>
                弄这么个静态主页，可以展示一下学习到的一些小例子小demo什么。
            </p>
            <p>
                在gitee上的主页是：<a href="https://anyuanlzh.gitee.io"
                    target: _blank>https://anyuanlzh.gitee.io</a></p>
            <p>
                在github上的主页是：<a href="https://anyuanlzh.github.io"
                    target: _blank>https://anyuanlzh.github.io</a>
                </p>
            <p>两个地址都可以访问。工程源码其实都是同一份，是同时托管在上述两平台上的。其实现在的gitee上挺好用的，在国内访问速度快，托管主页的设置也更好(尤其是单面应用的静态主页)。当然github上的资源更多...
            </p>
            <p>如果对这个主页的工程感觉兴趣可以点击查看源码：
                <a href="https://gitee.com/anyuanlzh/anyuanlzh"
                    target: _blank>
                    <img class="inline" height="24" width="24" src="../assets/imgs/gitee-logo.png" />
                </a>
                <a href="https://github.com/AnYuanLzh/anyuanlzh"
                    target: _blank>
                    <svg class="ml-4 inline" height="24" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                        </path>
                    </svg>
                </a>
            </p>
        </div>
        <h2 class="mt-6 font-bold">这里主要使用的web技术：</h2>
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
                    Vite是一种新型的前端构建工具
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
            <li>
                <a
                    target: _blank
                    class="lzh-a"
                    href="https://www.typescriptlang.org/"
                    >TypeScript</a
                >
                <p>
                    TypeScript 是 JavaScript 的超集，是 JavaScript 的强类型版本。我认为 TypeScript 是一项非常值得学习的技术。
                </p>
            </li>
        </ul>
        <h2 class="mt-6 font-bold">个人博客：</h2>
        <hr class="my-2"/>
        <ul>
            <li>
                <a
                    class="lzh-a"
                    target: _blank
                    href="https://blog.csdn.net/AnYuanLzh"
                    >在CSDN上的博客</a
                >
                <p>
                    这个就是注册的比较早，后面也没有换其它的平台，当然现在不用了，在上面的东西也不愿意转移了,就留个链接在这个吧.
                    以后应该不会上csdn上写东西了，以后主要用下面说的Notion了。
                </p>
                <p></p>
            </li>

            <li>
                <a
                    class="lzh-a"
                    target: _blank
                    href="https://www.notion.so/Web-3af47ec871664539bf9efdeb6924daad"
                    >在Notion上的笔记</a
                >
                <p>
                    现在主要在Notion上作笔记，也推荐大家使用，个人觉得是个不错的工具。
                </p>
            </li>
        </ul>
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
/* @tailwind base;
@tailwind components;
@tailwind utilities; */

@layer utilities {

    ul {
        @apply list-disc ml-4;
    }
    .lzh-a {
        @apply underline text-gray-700 py-2;
    }
    p{
        text-indent:2em;
    }
}
</style>
