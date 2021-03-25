<template>
    <div class="px-2">
        <h1 class="text-center font-bold pt-2 pb-1">CSS Layout 练习</h1>
        <h2>FlexBox:</h2>
        <p class="text-gray-500 text-xs">
            多看mdn上的文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
        </p>
        <!-- <input type="checkbox" v-model="isShow_FlexDirection" id="idFlexBox" />
        <label for="idFlexBox"> Flex Direction</label> -->
        <label for="idFlexDirection">
            <input
                type="checkbox"
                v-model="isShow_FlexDirection"
                id="idFlexDirection"
            />
            Flex Direction:
            <p class="pl-4 text-sm italic text-gray-600">
                整体上控制items的<span class="text-red-500 font-bold">排列</span
                >方向
            </p>
        </label>
        <div v-show="isShow_FlexDirection" class="pl-4">
            <h3>横向排列:</h3>
            <p class="text-sm italic text-gray-500">
                从左开始向右排,
                排号满了超出了父元素的宽度，就另起一行重新开始排；当然也可不换行，让它一直向右超出去
            </p>
            <div class="w-80 ml-10">
                <div class="bg-gray-300 p-2 my-1 flex flex-row">
                    <div class="fixed-cell" v-for="i in 3" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div class="bg-gray-300 p-2 my-1 flex flex-row flex-wrap">
                    <div class="fixed-cell" v-for="i in 7" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div class="bg-gray-300 p-2 my-1 flex flex-row">
                    <div class="fixed-cell" v-for="i in 7" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
            </div>

            <h3 class="text-lg">横向排列-反向:</h3>
            <p class="text-sm italic text-gray-500">
                从右开始向左排,
                排号满了超出了父元素的宽度，就另起一行重新开始排；当然也可不换行，让它一直向左超出去
            </p>
            <div class="w-80 ml-10">
                <div class="bg-gray-300 p-2 my-1 flex flex-row-reverse">
                    <div class="fixed-cell" v-for="i in 3" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div
                    class="bg-gray-300 p-2 my-1 flex flex-row-reverse flex-wrap"
                >
                    <div class="fixed-cell" v-for="i in 7" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div class="bg-gray-300 p-2 my-1 flex flex-row-reverse">
                    <div class="fixed-cell" v-for="i in 7" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
            </div>

            <h3 class="text-lg">纵向排列:</h3>
            <p class="text-sm italic text-gray-500">
                从上开始向下排,
                排号满了超出了父元素的高度，就另起一列重新开始排；当然也可不换列，让它一直向下超出去
            </p>
            <div class="flex flex-row ml-10">
                <div
                    class="w-20 h-40 bg-gray-300 p-2 mt-1 mb-10 mr-3 flex flex-col"
                >
                    <div class="fixed-cell" v-for="i in 2" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div
                    class="w-32 h-40 bg-gray-300 p-2 mt-1 mb-10 mr-3 flex flex-col flex-wrap"
                >
                    <div class="fixed-cell" v-for="i in 4" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div class="w-20 h-40 bg-gray-300 p-2 mt-1 mb-10 flex flex-col">
                    <div class="fixed-cell" v-for="i in 3" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
            </div>

            <h3 class="text-lg">纵向排列-反向:</h3>
            <p class="text-sm italic text-gray-500">
                从上开始向下排,
                排号满了超出了父元素的高度，就另起一列重新开始排；当然也可不换列，让它一直向下超出去
            </p>
            <div class="flex flex-row ml-10">
                <div
                    class="w-20 h-40 bg-gray-300 p-2 mb-1 mr-10 mt-10 flex flex-col-reverse"
                >
                    <div class="fixed-cell" v-for="i in 2" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div
                    class="w-32 h-40 bg-gray-300 p-2 mb-1 mr-10 mt-10 flex flex-col-reverse flex-wrap"
                >
                    <div class="fixed-cell" v-for="i in 4" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
                <div
                    class="w-20 h-40 bg-gray-300 p-2 mb-1 mt-10 flex flex-col-reverse"
                >
                    <div class="fixed-cell" v-for="i in 3" :key="i">
                        {{ i }}
                    </div>
                    <div class="fixed-cell">...</div>
                </div>
            </div>
        </div>

        <label for="idJustifyContent">
            <input
                type="checkbox"
                v-model="isShow_JustifyContent"
                id="idJustifyContent"
            />
            Justify Content & <span class="text-gray-400">Align Content</span>:
            <p class="pl-4 text-sm italic text-gray-600">
                整体上控制items在<span class="text-red-500 font-bold"
                    >主轴(默认是水平轴)</span
                >方向的<span class="text-red-500 font-bold">对齐</span
                >方式。<br />
                对应是的交叉轴由Align Content控制，道理是一样的.
            </p>
        </label>
        <div v-show="isShow_JustifyContent" class="pl-4">
            <p class="text-sm italic text-gray-500">
                1 justify-start -- justify-content: flex-start;
            </p>
            <div class="bg-gray-300 w-80 p-2 my-1 flex flex-row justify-start">
                <div class="fixed-cell" v-for="i in 3" :key="i">{{ i }}</div>
            </div>
            <p class="text-sm italic text-gray-500">
                2 justify-center -- justify-content: center;
            </p>
            <div class="bg-gray-300 w-80 p-2 my-1 flex flex-row justify-center">
                <div class="fixed-cell" v-for="i in 3" :key="i">{{ i }}</div>
            </div>
            <p class="text-sm italic text-gray-500">
                3 justify-end -- justify-content: flex-end;
            </p>
            <div class="bg-gray-300 w-80 p-2 my-1 flex flex-row justify-end">
                <div class="fixed-cell" v-for="i in 3" :key="i">{{ i }}</div>
            </div>
            <p class="text-sm italic text-gray-500">
                4 justify-between -- justify-content: space-between;
            </p>
            <div
                class="bg-gray-300 w-80 p-2 my-1 flex flex-row justify-between"
            >
                <div class="fixed-cell" v-for="i in 3" :key="i">{{ i }}</div>
            </div>
            <p class="text-sm italic text-gray-500">
                5 justify-around -- justify-content: space-around;
            </p>
            <div class="bg-gray-300 w-80 p-2 my-1 flex flex-row justify-around">
                <div class="fixed-cell" v-for="i in 3" :key="i">{{ i }}</div>
            </div>
            <p class="text-sm italic text-gray-500">
                3 justify-evenly -- justify-content: space-evenly;
            </p>
            <div class="bg-gray-300 w-80 p-2 my-1 flex flex-row justify-evenly">
                <div class="fixed-cell" v-for="i in 3" :key="i">{{ i }}</div>
            </div>
        </div>

        <label for="idAlignItems">
            <input
                type="checkbox"
                v-model="isShow_AlignItems"
                id="idAlignItems"
            />
            <span class="text-gray-400"> Justify Items</span> & Align Items:
            <p class="pl-4 text-sm italic text-gray-600">
                整体上控制items在<span class="text-red-500 font-bold"
                    >交叉轴(默认是纵轴)</span
                >方向的<span class="text-red-500 font-bold">对齐</span
                >方式。<br />
                对应是的主轴由Justify Items控制，道理是一样的.
                只它只在grid布局才有用，flex布局会忽略它哦
            </p>
        </label>
        <div v-show="isShow_AlignItems" class="pl-4">
            <p class="text-sm italic text-gray-500">
                1 items-start -- align-items: flex-start;
            </p>
            <div
                class="bg-gray-300 w-80 h-32 p-2 my-1 flex flex-row flex-wrap items-start"
            >
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-5 leading-5"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-6 leading-6"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-7 leading-7"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-8 leading-8"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-9 leading-9"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-10 leading-10"
                >
                    1
                </div>
            </div>
            <p class="text-sm italic text-gray-500">
                2 items-center -- align-items: center;
            </p>
            <div
                class="bg-gray-300 w-80 h-32 p-2 my-1 flex flex-row flex-wrap items-center"
            >
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-5 leading-5"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-6 leading-6"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-7 leading-7"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-8 leading-8"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-9 leading-9"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-10 leading-10"
                >
                    1
                </div>
            </div>
            <p class="text-sm italic text-gray-500">
                3 items-end -- align-items: flex-end;
            </p>
            <div
                class="bg-gray-300 w-80 h-32 p-2 my-1 flex flex-row flex-wrap items-end"
            >
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-5 leading-5"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-6 leading-6"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-7 leading-7"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-8 leading-8"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-9 leading-9"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-10 leading-10"
                >
                    1
                </div>
            </div>
            <p class="text-sm italic text-gray-500">
                4 items-baseline -- align-items: baseline;
            </p>
            <div
                class="bg-gray-300 w-80 h-32 p-2 my-1 flex flex-row flex-wrap items-baseline"
            >
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-10 leading-8"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-6 leading-6"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-7 leading-7"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-8 leading-6"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-9 leading-10"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm h-10 leading-5"
                >
                    1
                </div>
            </div>
            <p class="text-sm italic text-gray-500">
                5 items-stretch -- align-items: flex-stretch;
            </p>
            <p class="text-sm italic text-gray-500">
                这种情况下，下面的子元素就不能指定高度了，不然不起作用.
                就是说不能有自己决定高的属性
            </p>
            <div
                class="bg-gray-300 w-80 h-32 p-2 my-1 flex flex-row flex-wrap items-stretch"
            >
                <div
                    class="bg-yellow-700 w-20 text-center rounded m-1 text-white font-bold text-sm"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm"
                >
                    1
                </div>
                <div
                    class="bg-yellow-700 w-20 flex-none text-center rounded m-1 text-white font-bold text-sm"
                >
                    1
                </div>
            </div>
        </div>
        <label>
            <input type="checkbox" disabled />
            <span class="text-gray-400"> Self:</span>
            <p class="pl-4 text-sm italic text-gray-600">
                上面讲的 flex:_ _ _, justify-content,justify-items, align-*
                place-*, 者是在父元素上整体来控制下面的items。
            </p>
            <p class="pl-4 text-sm italic text-gray-600">
                其实它们都有对应的self形式，来单独控制一个item的相关表现
            </p>
        </label>

        <label>
            <input type="checkbox" disabled />
            <span class="text-gray-400"> Place Content & Place Items:</span>
            <p class="pl-4 text-sm italic text-gray-600">
                同时控制Jusity和Align,即主轴和交叉轴.
            </p>
        </label>

        <label>
            <input type="checkbox" disabled />
            <span class="text-gray-400"> 反转:</span>
            <p class="pl-4 text-sm text-gray-600">
                * flex-wrap: wrap-reverse; -- 另启一行(列)时的反转
            </p>
            <p class="pl-8 text-sm italic text-gray-600">
                比如本来是向下再启一行，反转之后变成向上再启一行了。
            </p>
            <p class="pl-4 text-sm text-gray-600">
                * flex-direction: row-reverse; -- start & end 反转
            </p>
            <p class="pl-8 text-sm italic text-gray-600">
                start(起点)变到end(终点),end变到start。就是轴向反转了。
            </p>
            <p class="pl-4 text-sm text-gray-600">
                * flex-direction: column-reverse;
            </p>
            <p class="pl-8 text-sm italic text-gray-600">
                这个中的column是已经将主轴和交叉轴反转了，然后reverse又将起点和终点反转了。这个厉害了。
            </p>
        </label>

        <label for="idGrowShrink">
            <input
                type="checkbox"
                v-model="isShow_GrowShrink"
                id="idGrowShrink"
            />
            Flex Grow & Flex Shrink & Flex Basis:
            <p class="pl-4 text-sm italic text-gray-600">
                item在布局中大小的放大，收缩设与基础大小
            </p>
        </label>
        <div v-show="isShow_GrowShrink" class="pl-4">
            <p>grow</p>
            <div class="my-1 p-2 h-16 text-center text-sm bg-gray-300 flex flex-row">
                <div
                    class="bg-purple-400 text-white rounded w-10 h-10 flex-none"
                >
                    大小不变
                </div>
                <div
                    class="bg-indigo-700 text-white rounded w-52 h-10 flex-grow"
                >会放大
                </div>
                <div
                    class="bg-purple-400 text-white rounded w-10 h-10 flex-none"
                >
                    大小不变
                </div>
            </div>
            <div class="my-1 p-2 h-16 text-center text-sm bg-gray-300 flex flex-row">
                <div
                    class="bg-purple-400 text-white rounded w-10 h-10 flex-grow"
                >
                </div>
                <div
                    class="bg-indigo-700 text-white rounded w-52 h-10 flex-grow-0"
                >不会放大
                </div>
                <div
                    class="bg-purple-400 text-white rounded w-10 h-10 flex-grow"
                >
                </div>
            </div>
            <p>shrink</p>
            <div class="my-1 p-2 h-16 text-center text-sm bg-gray-300 flex flex-row">
                <div
                    class="bg-purple-400 text-white rounded w-40 h-10 flex-none"
                >
                    大小不变
                </div>
                <div
                    class="bg-indigo-700 text-white rounded w-96 h-10 flex-shrink"
                >会缩小
                </div>
                <div
                    class="bg-purple-400 text-white rounded w-40 h-10 flex-none"
                >
                    大小不变
                </div>
            </div>
            <div class="my-1 p-2 h-16 text-center text-sm bg-gray-300 flex flex-row">
                <div
                    class="bg-purple-400 text-white rounded w-10 h-10 flex-grow"
                >
                </div>
                <div
                    class="bg-indigo-700 text-white rounded w-60 h-10 flex-shrink-0"
                >不会缩小
                </div>
                <div
                    class="bg-purple-400 text-white rounded w-10 h-10 flex-grow"
                >
                </div>
            </div>
        </div>

        <div class="h-20"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "CompName",
    setup() {
        const isShow_FlexDirection = ref<boolean>(false);
        const isShow_JustifyContent = ref<boolean>(false);
        const isShow_AlignItems = ref<boolean>(false);
        const isShow_GrowShrink = ref<boolean>(true);
        return {
            isShow_FlexDirection,
            isShow_JustifyContent,
            isShow_AlignItems,
            isShow_GrowShrink,
        };
    },
});
</script>

<style scoped>
@layer utilities {
    h2 {
        @apply text-xl;
    }
    h3 {
        @apply text-lg;
    }
    /* 大小固定的cell, 就是不被flex布局的父元素的左右大小，不被压缩也不被拉申
        主要为flex-none实现 */
    .fixed-cell {
        @apply flex-none bg-yellow-700 w-10 h-10 rounded m-1
            text-white font-bold text-xl leading-10 text-center;
    }
}
</style>
