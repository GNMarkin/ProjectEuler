"use strict";

//================== НАЧАЛО
$("button").on("click", function () {
    let arrayOnHTML = $(".arrData").text()
    let maxSum = calcMaxSumFromArray(arrayOnHTML);
    $(".Answer").text("Максимальная сумма: " + maxSum);
});//===========================


function calcMaxSumFromArray(arrayOnHTML) {
    let arrayData = convertArrayStringToArrayNumber(arrayOnHTML);
    let maxSum = findMaxSum(arrayData);
    return maxSum;
}

//преобразуем массив из строк в числовой массив
function convertArrayStringToArrayNumber(arrayOnHTML) {
    //преобразуем данные из сплошной строки в массив строк
    let arrayString = arrayOnHTML.split("\n");
    //удаляем пустую строку из массива
    if (arrayString[0] === "") arrayString.shift();
    //преобразуем каждую строку в массиве в числовой массив
    let arrayData = [];
    arrayString.forEach(function (str) {
        arrayData.push([]);
        str.split(" ").forEach(function (value) {
            if (value !== "") { arrayData[arrayData.length - 1].push(Number(value)) }
        });
    });
    return arrayData;
}

//преобразуем каждую строку в массиве в массив чисел
function convertStringFromArrayToArrayNumber(str) {
    let arrayNum = [];
    //разбиваем строку на массив, перебираем этот массив и оставляем только числа
    str.split(" ").forEach(function (value) {
        if (value !== "") { arrayNum.push(Number(value)) }
    });
    return [arrayNum];
}

function findMaxSum(arrayData) {
    //перебираем строки чисел с предпоследней до верха, для нахождения максимальной суммы
    for (let i = arrayData.length - 2; i >= 0; i--) {
        //каждое число из текущей строки плюсуем к одному из максимальных значений в нижней строке
        for (let j = 0; j < arrayData[i].length; j++) {
            let num = (arrayData[i+1][j] > arrayData[i+1][j+1]) ? arrayData[i+1][j] : arrayData[i+1][j+1];
            arrayData[i][j] = arrayData[i][j] + num;
        }
    }
    return arrayData[0][0];
}