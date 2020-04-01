"use strict";

let worker = new Worker("javascripts/PrimeWorker.js");

$("button").on("click", function () {
    worker.postMessage("");
    $("button").prop("disabled", true);
});

worker.onmessage = function (event) {
    var x = event.data.x;
    $("progress").val(x);
    if (x === 999999) {
        $(".answer").text("Последовательность: " + event.data.number + ", итераций: " + event.data.count);
        $("button").prop("disabled", false);
    }
};