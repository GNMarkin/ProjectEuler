"use strict";
const rank = 1000;
let numberArray = [];
let ostatok, memory;

$("button").on("click", function () {
    numberArray.push(2);

    for (let x = 1; x < rank; x++) {
        memory = 0;

        for (let index = 0; index < numberArray.length; index++) {
            //numberArray[index] += memory;
            let newNumber = (numberArray[index] * 2) % 10 + memory;
            memory = Math.floor((numberArray[index] * 2) / 10);
            numberArray[index] = newNumber;
        };
        if (memory != 0) { numberArray.push(memory) };
    };

    let sum = 0;
    numberArray.forEach(function(value){
        sum += value;
    });
    $(".answer").text("Сумма цифр числа 2<span class='stepen'>1000</span> = " + sum);
});

