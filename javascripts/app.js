"use strict";
var x, timerID, vector, tekPr;
x = 1;
vector = 1;
var maxPr = { "Pr": 1, "vector": vector, "startX": x };
$("button").on("click", function () {
    timerID = setInterval(findMax, 125);
});

var findMax = function () {
    //очищаем цвета
    $(".tablenumber span").css({ "color": "inherit", "font-weight": "inherit" });
    //закрасить и посчитать выбранное направление 3 - горизонталь, 1 - вертикаль, 2 - диагональ вниз, 4 - диагональ вверх
    setColorAndPr(vector);
    //Если текущее произведение больше максимально занести в базу
    setMaxPr();
    //закрасить максимальное произведение
    setColorMaxPr();
    //находим следующий вектор
    findNextVector();
    if (x === 420) { clearInterval(timerID) };
};

var setColorMaxPr = function () {
    var tekVector = maxPr.vector;
    var x = maxPr.startX;
    //вычисляем горизонталь
    if (tekVector === 3) {
        tekPr = 1;
        for (var y = 0; y != 4; y++) {
            $(`span:nth-child(${x + y})`).css({ "color": "blue", "font-weight": "bold" });
        };
    };
    //вычисляем вертикаль
    if (tekVector === 1) {
        tekPr = 1;
        for (var y = 0; y != 84; y = y + 21) {
            $(`span:nth-child(${x + y})`).css({ "color": "blue", "font-weight": "bold" });
        };
    };
    //вычисляем вертикаль вниз
    if (tekVector === 2) {
        tekPr = 1;
        for (var y = 0; y != 88; y = y + 22) {
            $(`span:nth-child(${x + y})`).css({ "color": "blue", "font-weight": "bold" });
        };
    };
    //вычисляем вертикаль вниз
    if (tekVector === 4) {
        tekPr = 1;
        for (var y = 0; y != -80; y = y - 20) {
            $(`span:nth-child(${x + y})`).css({ "color": "blue", "font-weight": "bold" });
        };
    };
};

var findNextVector = function () {
    var flag = true;
    while (flag) {
        if (vector != 4) {vector++;} else {vector = 1; x++;};
        if ((vector === 3) && (x % 21 < 18) && (x%21 != 0)) { flag = false; };
        if ((vector === 1) && (x < 357)) { flag = false; };
        if ((vector === 2) && (x < 357) && (x % 21 < 18) && (x%21 != 0)) {flag = false};
        if ((vector === 4) && (x > 63) && (x % 21 < 18) && (x%21 != 0)) {flag = false};
        if (x=== 420){flag = false};
    }
}

var setColorAndPr = function (tekVector) {
    //вычисляем горизонталь
    if (tekVector === 3) {
        tekPr = 1;
        for (var y = 0; y != 4; y++) {
            $(`span:nth-child(${x + y})`).css({ "color": "red", "font-weight": "bold" });
            tekPr = tekPr * $(`span:nth-child(${x + y})`).text();
        };
    };
    //вычисляем вертикаль
    if (tekVector === 1) {
        tekPr = 1;
        for (var y = 0; y != 84; y = y + 21) {
            $(`span:nth-child(${x + y})`).css({ "color": "red", "font-weight": "bold" });
            tekPr = tekPr * $(`span:nth-child(${x + y})`).text();
        };
    };
    //вычисляем вертикаль вниз
    if (tekVector === 2) {
        tekPr = 1;
        for (var y = 0; y != 88; y = y + 22) {
            $(`span:nth-child(${x + y})`).css({ "color": "red", "font-weight": "bold" });
            tekPr = tekPr * $(`span:nth-child(${x + y})`).text();
        };
    };
    //вычисляем вертикаль вниз
    if (tekVector === 4) {
        tekPr = 1;
        for (var y = 0; y != -80; y = y - 20) {
            $(`span:nth-child(${x + y})`).css({ "color": "red", "font-weight": "bold" });
            tekPr = tekPr * $(`span:nth-child(${x + y})`).text();
        };
    };
};

var setMaxPr = function () {
    if (tekPr > maxPr.Pr) {
        maxPr.Pr = tekPr;
        maxPr.vector = vector;
        maxPr.startX = x;
        $(".maxPr").text("Максимальное произведение: " + maxPr.Pr);
    };
};