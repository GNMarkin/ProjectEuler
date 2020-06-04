"use strict";

//================== НАЧАЛО
$("button").on("click", function () {
    let quantitySunday = calcQuantitySunday();
    $(".Answer").text("Максимальная сумма: " + quantitySunday);
});//===========================

function calcQuantitySunday() {
    let data = {
        Day:1,
        Month:1,
        Year:1900,
        Week:1
    },
        countSunday = 0,
        maxDayInMonth = 31;

    // начать подсчет воскресений до 31.12.2000
    while (data.Year !== 2001) {
        data.Day++;
        data.Week++
        
        if (data.Week === 7) { 
            data.Week = 0;
            if ((data.Year > 1900)&&(data.Day === 1)) countSunday++;
        };

        if (data.Day === maxDayInMonth) {
            data.Day = 0;
            data.Month++;
            if (data.Month === 13) {
                data.Month = 1;
                data.Year++;
            }
            maxDayInMonth = getMaxDayInMonth(data.Month, data.Year);
        };
    };
    return countSunday;
};

function getMaxDayInMonth(Month, Year){
    let maxDayInMonth;
    switch (Month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            maxDayInMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxDayInMonth = 30;
            break;
        default:
            (Year % 4 === 0) ? maxDayInMonth = 29 : maxDayInMonth = 28;
            if (Year % 100 === 0) {
                (Year % 400 === 0) ? maxDayInMonth = 29 : maxDayInMonth = 28;
            }
    }
    return maxDayInMonth;
}