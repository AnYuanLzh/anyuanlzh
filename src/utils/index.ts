interface IYearMonthDay {
    year: number;
    month: number;
    day: number;
}
const getYearMonthDay = (date: Date): IYearMonthDay => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return { year, month, day };
};
//根据年月日生成一个日期
const createDate = (year: number, month: number, day: number): Date => {
    return new Date(year, month, day);
};

const addYears = (date: Date, num: number) => {
    let newDate = new Date(date.getTime());
    newDate.setFullYear(date.getFullYear() + num);
    return newDate;
};
const addMonths = (date: Date, num: number) => {
    let newDate = new Date(date.getTime());
    newDate.setMonth(date.getMonth() + num);
    return newDate;
};
const addDays = (date: Date, num: number) => {
    let newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() + num);
    return newDate;
};

export {
    IYearMonthDay,
    getYearMonthDay,
    createDate,
    addYears,
    addMonths,
    addDays,
};
