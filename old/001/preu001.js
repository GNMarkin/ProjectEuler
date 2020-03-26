var index,
    iter,
    sum;
//********* Вариант первый */
sum = 0;
iter = 0;
for (index = 1; index < 1000; index++) {
    iter++;
    if ((index % 3 === 0) || (index % 5 === 0)) {
        sum = sum + index;
        iter = iter + 3;
    };    
};
$(".screen").append($("<p>").text("Сумма = " + sum + ", количество итераций: " + iter));
//window.alert(sum + " " + iter);

/*********** Вариант второй */
sum = 0;
iter = 0;
for (index = 3; index < 1000; index = index + 3) {
    iter++;
    if ((index % 3 === 0) || (index % 5 === 0)) {
        sum = sum + index;
        iter = iter + 3;
        //$(".screen").append($("<p>").text(index));
    };    
};
for (index = 5; index < 1000; index = index + 5) {
    iter++;
    if ((index % 5 === 0) && (index % 3 != 0)) {
        sum = sum + index;
        iter = iter + 3;
        //$(".screen").append($("<p>").text(index));
    };    
};
$(".screen").append($("<p>").text("Сумма = " + sum + ", количество итераций: " + iter));
