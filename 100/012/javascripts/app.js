"use strict";
const MaxDelitel = 500;
$("progress").attr("max", MaxDelitel);
let worker = new Worker("javascripts/PrimeWorker.js");
$("button").on("click", function () {
    worker.postMessage(MaxDelitel);
});

worker.onmessage = function (event) {
    var info = event.data;
    if (info < MaxDelitel) {
        $("progress").val(info);
    } else {
        $("progress").val(info);
        $(".answer").text("Треугольное число, у которого более пятисот делителей: " + info);
    }
};