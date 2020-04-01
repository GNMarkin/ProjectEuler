"use strict";
let arrayNumber;
let Summa = 0;
let findString = "";
let tekString = "";
arrayNumber = $(".tablenumber").text();
$("button").on("click", function(){
    let i = 1;
    do {
        tekString = findString;
        Summa = Summa * 10 + getSummFromArray(i);
        findString = String(Summa).substr(0,10);
        i++;
    }
    while (findString != tekString);
    $(".answer").text("Первые 10 чисел суммы: " + findString);
});

function getSummFromArray(indexKolonki){
    let Summa = 0;
    for (let x = 20; x < arrayNumber.length; x = x + 71){
        Summa = Summa + Number(arrayNumber[x + indexKolonki]);
    };
    return Summa;
};