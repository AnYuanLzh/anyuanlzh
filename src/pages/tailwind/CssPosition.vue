<template>
    <div class="px-2">
        <h1 class="text-center font-bold pt-2 pb-1">CSS Position 练习</h1>
        <p class="text-gray-500 text-xs">
            多看mdn上的文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
        </p>

        <div class="mt-2">
            <p>Static:</p>
            <p class="text-gray-500 text-xs italic">
                默认的定位方式。它的位置完全被文档流掌管，你给它设置top
                left这些也没有用。
            </p>
            <div class="p-4 bg-gray-500 flex flex-row">
                <div class="w-40 h-20 bg-red-500 border-black border-2">A</div>
                <div
                    class="w-40 h-20 bg-blue-500 border-black border-2 static top-6 left-3"
                >
                    B: static, 我设置了top和left的，可是没有用
                </div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">C</div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">D</div>
            </div>

            <p>Relative:</p>
            <p class="text-gray-500 text-xs italic">
                它还在文档流中，且这可以相对与它自己在文档流中的位置再做位移，static做不到。
            </p>
            <div class="p-4 bg-gray-500 flex flex-row">
                <div class="w-40 h-20 bg-red-500 border-black border-2">A</div>
                <div
                    class="w-40 h-20 bg-blue-500 border-black border-2 relative top-6 left-3"
                >
                    B: relative 我设置了top和left
                </div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">C</div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">D</div>
            </div>

            <p>Absolute:</p>
            <p class="text-gray-500 text-xs italic">
                就是它脱离了文档流，它的位置是相对与它的最近的一个非static的祖元素,当这样的祖先元素不存在时，则相对于ICB（inital
                container block, 初始包含块）。但是有点一点要你要记住，如它的top
                left bottom
                right一个们都没有设置的话，它的位置默认还是在它的自然的一个文档流的位置上，只是它不点用文档流的宽高。注：不管怎么样它的位置还是在一个块里被约束着的
            </p>
            <div class="p-4 bg-gray-500 flex flex-row relative">
                <div class="w-40 h-20 bg-red-500 border-black border-2">A</div>
                <div
                    class="w-40 h-20 bg-blue-500 border-black border-2 top-1 left-1 z-10 absolute"
                >
                    B:absolute
                </div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">C</div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">D</div>
            </div>
            <div class="p-4 mt-1 bg-gray-500 flex flex-row relative">
                <div class="w-40 h-20 bg-red-500 border-black border-2">A</div>
                <div
                    class="w-40 h-20 bg-blue-500 border-black border-2 z-10 absolute"
                >
                    B:absolute,没有设置位置它就默认放到了这个位置
                </div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">C</div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">D</div>
            </div>

            <p>Fixed:</p>
            <p class="text-gray-500 text-xs italic">
                固定定位与绝对定位相似，但元素的包含块为 viewport
                视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素
            </p>
            <p>找不到B,请看右上角。</p>
            <div class="p-4 bg-gray-500 flex flex-row">
                <div class="w-40 h-20 bg-red-500 border-black border-2">A</div>
                <div
                    class="w-40 h-20 bg-blue-500 border-black border-2 fixed top-6 right-6"
                >
                    B: fixed.我是不会跟着滚动的
                </div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">C</div>
                <div class="w-40 h-20 bg-red-500 border-black border-2">D</div>
            </div>

            <p>Sticky:</p>
            <p class="text-gray-500 text-xs italic">
                粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
            </p>
            <div class="mt-1 px-4 bg-gray-500 h-28 overflow-y-scroll">
                <div class="text-gray-200">
                    <div
                        class="px-2 font-bold bg-gray-900 rounded sticky top-0"
                    >
                        Header1
                    </div>
                    <p class="px-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores, perspiciatis magni sint sit cumque aspernatur
                        tempore quos
                    </p>
                </div>
                <div class="text-gray-200">
                    <div
                        class="px-2 font-bold bg-gray-900 rounded sticky top-0"
                    >
                        Header2
                    </div>
                    <p class="px-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores, perspiciatis magni sint sit cumque aspernatur
                        tempore quos vitae magnam deleniti quia sed cum facilis
                        excepturi sequi a minus? Eos, inventore?
                    </p>
                </div>
                <div class="text-gray-200">
                    <div
                        class="px-2 font-bold bg-gray-900 rounded sticky top-0"
                    >
                        Header2
                    </div>
                    <p class="px-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores, perspiciatis magni sint sit cumque aspernatur
                        tempore quos vitae magnam deleniti quia sed cum facilis
                        excepturi sequi a minus? Eos, inventore?Eos, inventore?
                    </p>
                </div>
            </div>
            <div
                class="mt-1 px-0 bg-gray-500 text-gray-200 flex flex-row overflow-x-scroll"
            >
                <div class="ml-6 px-2 font-bold bg-gray-900 rounded sticky left-0">
                    Header1
                </div>
                <p class="px-2 flex-none h-24">
                    Lorem ipsum dolor sit elit.
                </p>
                <div class="px-2 font-bold bg-gray-900 rounded sticky left-0">
                    Header2
                </div>
                <p class="px-1 flex-none  h-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div class="px-2 font-bold bg-gray-900 rounded sticky left-0">
                    Header2
                </div>
                <p class="px-1 flex-none h-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>

        <div class="h-80"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "CompName",
    setup() {
        const onRef = (el: any) => {
            console.log(el);
        };

        return {
            onRef,
        };
    },
});
</script>

<style scoped></style>
