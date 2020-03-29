"use strict";
onmessage = function(event) {
    let Delitel = event.data;
    let koldel, maxdel, x, i, ArifProgr;
    x = 2;
    koldel = 0;
    maxdel = 0;
    while (koldel < Delitel){
        koldel = 0;
        ArifProgr = (x * (x + 1)) / 2;
        i = 1;
        while (ArifProgr/i >= i) {
            if (ArifProgr % i === 0){
                koldel = koldel + 2;
            };
            i++;
        };
        x++;
        if (koldel > maxdel){
            maxdel = koldel;
            postMessage(koldel);
        };
    }; 
    postMessage(ArifProgr);
};