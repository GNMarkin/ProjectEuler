"use strict";
onmessage = function () {
    let maxNumber = { "number": 0, "count": 0, "x": 0 };
    let tekCount = 0;
    for (let x = 13; x < 1000000; x++) {
        tekCount = getCountFollow(x);
        if (tekCount > maxNumber.count) {
            maxNumber.number = x;
            maxNumber.count = tekCount;
        };
        maxNumber.x = x;
        postMessage(maxNumber);
    };
};

function getCountFollow(num) {
    let count = 0;
    while (num != 1) {
        num = (num % 2 === 0) ? (num / 2) : (3 * num + 1);
        count++;
    }
    return count;
}