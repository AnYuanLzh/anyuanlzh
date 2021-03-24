<template>
    <div class="lzh-container">
        <h1 class="text-center pt-2 pb-1">vue3+ts实现的简单计算器</h1>
        <h2 class="text-center pb-1 text-gray-400 text-xs underline italic">
            参考来源：
            <a
                href="https://www.bilibili.com/video/BV1Ag4y1q7sU/?spm_id_from=333.788.recommend_more_video.-1"
            >
                B站 - CodingStartup起码课 -【Vue】制作新拟态计算器</a
            >
        </h2>
        <div class="lzh-wrap">
            <div class="lzh-calcalutor">
                <!-- 结果 -->
                <div class="lzh-result" style="grid-area: result">
                    {{ equation }}
                </div>
                <!-- 八个功能按键 -->
                <button style="grid-area: ac" @click="clear">AC</button>
                <button style="grid-area: plus-minus" @click="calculateToggle">
                    ±
                </button>
                <button style="grid-area: percent" @click="calculatePercentage">
                    %
                </button>
                <button style="grid-area: add" @click="append('+')">+</button>
                <button style="grid-area: substract" @click="append('-')">
                    -
                </button>
                <button style="grid-area: multiply" @click="append('x')">
                    x
                </button>
                <button style="grid-area: divide" @click="append('÷')">
                    ÷
                </button>
                <button style="grid-area: equal" @click="calculate">=</button>
                <!-- 十个数字按钮 -->
                <button style="grid-area: num-1" @click="append('1')">1</button>
                <button style="grid-area: num-2" @click="append('2')">2</button>
                <button style="grid-area: num-3" @click="append('3')">3</button>
                <button style="grid-area: num-4" @click="append('4')">4</button>
                <button style="grid-area: num-5" @click="append('5')">5</button>
                <button style="grid-area: num-6" @click="append('6')">6</button>
                <button style="grid-area: num-7" @click="append('7')">7</button>
                <button style="grid-area: num-8" @click="append('8')">8</button>
                <button style="grid-area: num-9" @click="append('9')">9</button>
                <button style="grid-area: num-0" @click="append('0')">0</button>
                <!-- 小数点 -->
                <button style="grid-area: dot" @click="append('.')">.</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    name: "CompName",
    setup() {
        //定义数据
        const state = reactive({
            equation: "0",
            //判断是否已经输入小数位，为了防止连续输入
            isDecimalAdded: false,
            //判断是否已经输入加、减、乘、除，为了防止连续输入
            isOperatorAdded: false,
            //判断计算器是否已经开妈输入数字
            //这会为正负数和百分比计算的时候作一些判断
            isStarted: false,
        });
        //定义函数
        const isOperator = (character: string): Boolean => {
            return ["+", "-", "x", "÷"].indexOf(character) > -1;
        };
        const append = (charactor: string): void => {
            console.log("append", charactor);
            //start
            if (state.equation === "0" && !isOperator(charactor)) {
                if (charactor === ".") {
                    state.equation += "" + charactor;
                    state.isDecimalAdded = true;
                } else {
                    //第一个字符是数字
                    state.equation = "" + charactor;
                }
                state.isStarted = true;
                return;
            }

            // if number
            if (state.equation.length > 10) {
                return;
            }
            if (!isOperator(charactor)) {
                if (charactor === "." && state.isDecimalAdded) {
                    return;
                }
                state.equation += "" + charactor;
                if (charactor === ".") {
                    state.isDecimalAdded = true;
                    state.isOperatorAdded = true;
                } else {
                    state.isOperatorAdded = false;
                }
            }
            // if operator
            else {
                if (state.isOperatorAdded) {
                    return;
                }
                state.equation += "" + charactor;
                state.isDecimalAdded = false;
                state.isOperatorAdded = true;
            }
        };
        //点击=时
        const calculate = (): void => {
            console.log("calculate");
            let rusult = state.equation
                .replace(new RegExp("x", "g"), "*")
                .replace(new RegExp("÷", "g"), "/");
            let temp = eval(rusult) //计算结果
                .toFixed(9); //限制结果位数
            let r = parseFloat(temp).toString();
            state.equation = r; // 保存结果

            state.isDecimalAdded = false;
            state.isOperatorAdded = false;
        };
        //点击±时
        const calculateToggle = (): void => {
            console.log("calculateToggle");
            if (state.isOperatorAdded || !state.isStarted) {
                return;
            }
            state.equation = state.equation + "* -1";
            calculate();
        };
        //点击%时
        const calculatePercentage = (): void => {
            console.log("calculatePercenttage");
            if (state.isOperatorAdded || !state.isStarted) {
                return;
            }
            state.equation = state.equation + "* 0.01";
            calculate();
        };
        //点击AC时
        const clear = (): void => {
            console.log("clear");
            state.equation = "0";
            state.isDecimalAdded = false;
            state.isOperatorAdded = false;
            state.isStarted = false;
        };

        return {
            ...toRefs(state),
            isOperator,
            append,
            calculate,
            calculateToggle,
            calculatePercentage,
            clear,
        };
    },
});
</script>

<style scoped>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */
@layer utilities {
    .lzh-wrap {
        @apply flex justify-center items-center py-16;
        background-color: #eee;
    }
    .lzh-calcalutor {
        /* 定义两个css变量 */
        --btn-w: 80px;
        --btn-h: 80px;
        /* 设置一个4x6的grid布局 */
        @apply grid p-6 rounded-2xl;
        grid-template-areas:
            "result result result result"
            "ac plus-minus percent divide"
            "num-7 num-8 num-9 multiply"
            "num-4 num-5 num-6 substract"
            "num-1 num-2 num-3 add"
            "num-0 num-0 dot equal";
        grid-template-columns: repeat(4, var(--btn-w));
        grid-template-rows: repeat(6, var(--btn-h));

        /* 边框阴影 */
        /* x偏移量 | y偏移量 | 模糊半径 | 扩散半径| 阴影颜色 */
        box-shadow: -8px -8px 16px -10px rgba(255, 255, 255, 1),
            8px 8px 16px -10px rgba(0, 0, 0, 0.5);
    }

    .lzh-calcalutor button {
        @apply  outline-none m-2 rounded-full font-normal text-2xl text-gray-400;
        font-family: Helvetica;
        /* 设置出一点凹下去的感觉 */
        background: linear-gradient(
            135deg,
            rgba(220, 220, 220, 1) 0%,
            rgba(246, 246, 246, 1) 100%
        );
        box-shadow: -4px -4px 16px -10px rgba(255, 255, 255, 1),
            4px 4px 16px -10px rgba(0, 0, 0, 0.3);
    }
    .lzh-calcalutor button:active {
        box-shadow: -4px -4px 16px -10px rgba(255, 255, 255, 1) inset,
            4px 4px 16px -10px rgba(0, 0, 0, 0.3) inset;
    }
    .lzh-calcalutor .lzh-result {
        @apply text-right text-4xl px-5 text-gray-700 overflow-hidden;
        line-height: var(--btn-h);
        font-family: Helvetica;
    }
}
</style>
