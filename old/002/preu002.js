var number1, number2, numbernext, iter;

console.time("exmpl1");
number1 = 1;
number2 = 2;
sum = 2;
iter = 3;
while (number2+number1 < 4000000) {
    numbernext = number1 + number2;
    number1 = number2;
    number2 = numbernext;
    iter = iter + 5;
    if (number2 % 2 === 0)  {
        sum = sum + number2;
        iter = iter + 2;
    };    
};
$(".screen").append($("<p>").text("Сумма = " + sum + ", количество итераций: " + iter));
console.timeEnd("exmpl1");

console.time("exmpl2");
number1 = 1;
number2 = 2;
numbernext = number1 + number2;
sum = 2;
iter = 4;
while (numbernext < 4000000) {
    number1 = number2;
    number2 = numbernext;
    iter = iter + 3;
    if (number2 % 2 === 0)  {
        sum = sum + number2;
        iter = iter + 2;
    };    
    numbernext = number1 + number2;
    iter++;
};
$(".screen").append($("<p>").text("Сумма = " + sum + ", количество итераций: " + iter));
console.timeEnd("exmpl2");