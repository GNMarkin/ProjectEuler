"use strict";

//let worker = new Worker("javascripts/PrimeWorker.js");
const lengthGrid = 20;
let lengthPath = 0;
let gridArray = [];

$("button").on("click", function () {
    let xGrid = 0;
    let yGrid = 0;
    //findPath(xGrid, yGrid);
    for (xGrid = 0; xGrid <= lengthGrid; xGrid++) {
        gridArray[xGrid] = [];
        for (yGrid = 0; yGrid <= lengthGrid; yGrid++) {
            if (xGrid === 0 && yGrid === 0) { gridArray[xGrid][yGrid] = 1; };
            if (xGrid === 0 && yGrid != 0) { gridArray[xGrid][yGrid] = 1; };
            if (xGrid != 0  && yGrid === 0) { gridArray[xGrid][yGrid] = 1; };
            if (xGrid != 0  && yGrid != 0) { gridArray[xGrid][yGrid] = gridArray[xGrid-1][yGrid] + gridArray[xGrid][yGrid-1]; };
        }
    }
    console.log(gridArray);
    $(".answer").text(`В сетке 20х20: ${gridArray[lengthGrid][lengthGrid]} машрутов`)
});

