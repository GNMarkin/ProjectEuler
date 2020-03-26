"use strict"
let a, b, c;
console.time("Ex1");
a = 1;
b = 2;
c = 3;
while (a + b + c <= 1000) {
    b = a + 1;
    while (b < c) {
        c = 1000 - b - a;
        if (a * a + b * b === c * c) {
            console.log(`a=${a} b=${b} c=${c}`);
            console.log("Произведение = " + a*b*c);
        }
        b++;
    }
    a++;
    b = a+1;
    c = b+1;
}
console.timeEnd("Ex1");