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

const addYears = (date:Date, num: number) => {
    let dateTime = date.setFullYear(date.getFullYear() + num);
    return new Date(dateTime);
};
const addMonths = (date: Date, num: number) => {
    let dateTime = date.setMonth(date.getMonth() + num);
    return new Date(dateTime);
};
const addDays = (date: Date, num: number) => {
    let dateTime = date.setDate(date.getDate() + num);
    return new Date(dateTime);
};

export {
    IYearMonthDay,
    getYearMonthDay,
    createDate,
    addYears,
    addMonths,
    addDays,
};
