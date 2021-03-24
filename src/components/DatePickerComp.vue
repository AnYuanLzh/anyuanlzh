/** * 日期选择器 *
参考：https://www.bilibili.com/video/BV1k4411C7DX?from=search&seid=7343710285072819819
*/

<template>
    <div v-click-outside class="relative text-sm w-44" for="input">
        <input
            id="input"
            type="text"
            :value="formatDate"
            placeholder="yyy-mm-dd"
            readonly
            class="w-44 pl-1 pr-8 py-0.5"
        />
        <span class="w-5 absolute inset-y-0.5 right-0.5">
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
        </span>
        <div
            v-if="isVisible"
            class="absolute bg-gray-100 mt-1 ring-2 ring-blue-300 rounded w-56"
        >
            <div class="flex justify-around h-8 leading-8 text-center my-0.5">
                <span class="btn-add-year-month" @click="addYear(-1)"
                    >&lt;</span
                >
                <span class="btn-add-year-month" @click="addMonth(-1)"
                    >&lt;&lt;</span
                >
                <span>{{ formatDate2 }}</span>
                <span class="btn-add-year-month" @click="addMonth(1)"
                    >&gt;&gt;</span
                >
                <span class="btn-add-year-month" @click="addYear(1)">&gt;</span>
            </div>
            <div>
                <div
                    class="border-b-2 border-t-2 text-xs text-gray-600 font-bold"
                >
                    <span
                        v-for="num in [
                            '日',
                            '一',
                            '二',
                            '三',
                            '四',
                            '五',
                            '六',
                        ]"
                        :key="num"
                        class="inline-flex justify-center items-center w-8 h-7"
                    >
                        {{ num }}
                    </span>
                </div>
                <div>
                    <!-- 6*7的一个日期表 -->
                    <div v-for="row in 6" :key="row" class="">
                        <span
                            v-for="col in 7"
                            :key="col"
                            :class="{
                                'date-cell': true,
                                'date-cell-not-curr-month': !isCurrMonth(
                                    row,
                                    col
                                ),
                                'date-cell-curr-date': isCurrDate(row, col),
                                'date-cell-today-date': isTodayDate(row, col),
                            }"
                            @click="chooseDate(row, col)"
                        >
                            <!-- {{(row-1)*7+(col-1)}}- -->
                            {{
                                visibleDates[
                                    (row - 1) * 7 + (col - 1)
                                ].getDate()
                            }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="text-right m-1 text-blue-500 border-t-2">
                <span
                    class="inline-block h-7 leading-7 px-2 mt-0.5 text-sm text-center font-medium hover:bg-gray-400 hover:text-gray-50"
                    @click="setToday()"
                    >今天</span
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
    addDays,
    addYears,
    addMonths,
    createDate,
    getYearMonthDay,
    IYearMonthDay,
} from "../utils/util";

export default defineComponent({
    name: "DatePickerComp",
    props: {
        value: {
            type: Date,
            default: () => new Date(),
        },
    },
    directives: {
        //自定义指令
        //把事件绑定到document上，看一下点击的是否是当前这个元素内部
        clickOutside: {
            mounted(el, binding) {
                // console.log(el,binding,vnode);
                // console.log("mounted:", binding);
                let input = el.querySelector('#input');
                // let svg = el.querySelector('svg')
                let clickHandler = (event: Event) => {
                    console.log(event.target); //被点击中的目标元素
                    //被点中的元素是不是这个组件的子元素
                    let curComp = binding.instance as any;
                    if (el.contains(event.target)) {
                        // if(input != document.activeElement){
                        //     input.focus()
                        // }
                        if (curComp.isVisible == false) {
                            curComp.setVisible(true);
                        }
                    } else {
                        if (curComp.isVisible == true) {
                            curComp.setVisible(false);
                        }
                    }
                };
                document.addEventListener("click", clickHandler);
                el.clickHandler = clickHandler;

                //这个逻辑是用来保持住inut的焦点状态
                let mousedownHandler = (event: Event) => {
                    if (el.contains(event.target) && event.target!=input) {
                        if(input!=document.activeElement){
                            input.focus();
                        }
                        //这是保持焦点的关键
                        event.preventDefault();
                    }
                };
                document.addEventListener("mousedown", mousedownHandler);
                el.mousedownHandler = mousedownHandler;
            },
            unmounted(el) {
                document.removeEventListener("click", el.clickHandler);
                el.clickHandler = null;

                document.removeEventListener("mousedown", el.mousedownHandler);
                el.mousedownHandler = null;
            },
        },
    },
    emits:[
        "onchange"
    ],
    setup(props, { emit }) {
        // console.log("setup:", context);
        const isVisible = ref<boolean>(false);

        const formatDate = computed<string>(() => {
            let { year, month, day }: IYearMonthDay = getYearMonthDay(
                props.value
            );
            return `${year}-${month + 1}-${day}`;
        });
        const formatDate2 = computed<string>(() => {
            let { year, month }: IYearMonthDay = getYearMonthDay(props.value);
            return `${year}年${month + 1}月`;
        });
        const visibleDates = computed<Date[]>(() => {
            //计算开始的日期
            //先获取当前是周几 把天数往前加几天 再循环42天
            let { year, month, day } = getYearMonthDay(props.value);
            //获取当前月的第一天的日期
            let curMonthFirstDate = createDate(year, month, 1);
            //获取它的周几
            let week = curMonthFirstDate.getDay();
            // console.log("week",week);
            //计算开始的日期
            let startDate = new Date(
                curMonthFirstDate.getTime() - week * 86400000
            ); //86400000 = 60*60*1000*24
            // let startDate = addDays(curMonthFirstDate,-week);

            //循环42天
            let arr: Date[] = [];
            for (let i = 0; i < 42; i++) {
                arr.push(new Date(startDate.getTime() + i * 86400000));
                // arr.push(addDays(startDate,i))
            }
            return arr;
        });

        const setVisible = (visible: boolean): void => {
            isVisible.value = visible;
        };
        //给定一个日期判断它是不是属于当月
        const isCurrMonth = (row: number, col: number): boolean => {
            let date = visibleDates.value[(row - 1) * 7 + (col - 1)];
            return date.getMonth() === props.value.getMonth();
        };
        const isCurrDate = (row: number, col: number): boolean => {
            let date = visibleDates.value[(row - 1) * 7 + (col - 1)];
            return (
                date.getMonth() === props.value.getMonth() &&
                date.getDate() === props.value.getDate()
            );
        };
        const isTodayDate = (row: number, col: number): boolean => {
            let date = visibleDates.value[(row - 1) * 7 + (col - 1)];
            return (
                date.getMonth() === new Date().getMonth() &&
                date.getDate() === new Date().getDate()
            );
        };
        //选择一个日期
        const chooseDate = (row: number, col: number): void => {
            let date = visibleDates.value[(row - 1) * 7 + (col - 1)];
            //我们触发一个事件
            emit("onchange", date);
        };
        const addYear = (num: number) => {
            // let date = props.value;
            // let dateTime = date.setFullYear(date.getFullYear() + num);
            // date = new Date(dateTime);
            let date = addYears(props.value, num);
            emit("onchange", date);
        };
        const addMonth = (num: number) => {
            // let date = props.value;
            // let dateTime = date.setMonth(date.getMonth() + num);
            // date = new Date(dateTime);
            let date = addMonths(props.value, num);
            emit("onchange", date);
        };
        const setToday = (): void => {
            let ymd1: IYearMonthDay = getYearMonthDay(props.value);
            let ymd2: IYearMonthDay = getYearMonthDay(new Date());
            let today = new Date();
            if (
                ymd1.year !== ymd2.year ||
                ymd1.month !== ymd2.month ||
                ymd1.day !== ymd2.day
            ) {
                emit("onchange", new Date());
            }
        };
        return {
            isVisible,
            formatDate,
            formatDate2,
            visibleDates,
            setVisible,
            isCurrMonth,
            isCurrDate,
            isTodayDate,
            chooseDate,
            addYear,
            addMonth,
            setToday,
        };
    },
});
</script>

<style scoped>
@layer utilities {
    .btn-add-year-month {
        @apply cursor-pointer w-8 hover:bg-gray-300;
    }
    .date-cell {
        @apply inline-flex justify-center
                items-center w-8 h-8
                cursor-pointer
                hover:border-2 hover:border-pink-300 hover:rounded-md hover:bg-gray-300;
    }
    .date-cell-curr-date {
        @apply bg-blue-500 rounded-md text-gray-100;
    }
    .date-cell-not-curr-month {
        @apply text-gray-400;
    }
    .date-cell-today-date {
        @apply underline;
    }
}
</style>
