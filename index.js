/*----------------------minBlock.js------------*/
/* Copyright (C) flouthoc (gunnerar7@gmail.com)
 * Written by http://github.com/flouthoc
 * Under MIT Lisence
 * Contributors : Alvaro Pinot @alvaropinot http://github.com/alvaropinot
 */
function putSquare(ctx, x, y, height, width, color) {

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.closePath();
}


function populateMatrix(ctx, height, width, padding, blockStack, color) {

    var Height = height - 2 * padding;
    var Width = width - 2 * padding;

    var squareHeight = Height / blockStack;
    var squareWidth = Height / blockStack;

    for (var i = 0; i < blockStack; i++) {

        for (var j = 0; j < blockStack; j++) {
            putSquare(ctx, padding + (j * squareWidth), padding + (i * squareHeight), squareHeight, squareWidth, color);
        }
    }

}


function enlight(ctx, height, width, padding, blockStack, color, matrixX, matrixY) {

    var Height = height - 2 * padding;
    var Width = width - 2 * padding;

    var squareHeight = Height / blockStack;
    var squareWidth = Height / blockStack


    for (var i = 0; i < blockStack; i++) {

        for (var j = 0; j < blockStack; j++) {

            if ((i == matrixY) && (j == matrixX)) {
                putSquare(ctx, padding + (j * squareWidth), padding + (i * squareHeight), squareHeight, squareWidth, color);
            }
        }
    }


}


function getLocation(number) {


    if (number == 0)
        return [0, 0];
    if (number == 1)
        return [0, 1];
    if (number == 2)
        return [0, 2];


    if (number == 3)
        return [1, 0];
    if (number == 4)
        return [1, 1];
    if (number == 5)
        return [1, 2];


    if (number == 6)
        return [2, 0];
    if (number == 7)
        return [2, 1];
    if (number == 8)
        return [2, 2];
}



function fillIt(ctx, height, width, padding, blockStack, color, number) {

    var coordinate = getLocation(number);
    enlight(ctx, height, width, padding, blockStack, color, coordinate[1], coordinate[0]);
}


function splitnFill(ctx, height, width, padding, blockStack, color, number) {

    var ob = String(number).split('').map(Number);
    var i = 0;
    while (i < ob.length) {
        fillIt(ctx, height, width, padding, blockStack, color, ob[i]);
        i++;
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//var timestamp = new Date().getUTCMilliseconds();
function init(config) {

    config = config || {};
    /*defaults = {
        divId :
        time :
        randomColor : false,
        colorPrimary :
        colorSecondary :
        pause : false
    }*/

    if(!config.divId) {
        return;
    }

    if (!config.randomColor) {
        config.randomColor = false;
    }
    if (!config.pause) {
        config.pause = false;
    }
    var buffer = new Date().getUTCMilliseconds();
    var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];

    if (!config.randomColor) {
        var colorPrimary = colors[Math.floor(Math.random() * colors.length)];
        var colorSecondary = colors[Math.floor(Math.random() * colors.length)];
        while (colorSecondary == colorPrimary) {
            colorSecondary = colors[Math.floor(Math.random() * colors.length)];
        }
    } else {
        var colorPrimary = config.colorPrimary;
        var colorSecondary = config.colorSecondary;
    }
    var canvas = document.getElementById(config.divId);
    canvas.style.background = colorPrimary;
    var ctx = canvas.getContext('2d');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var padding = 20;
    var blockStack = 3;
    var buffer
    populateMatrix(ctx, canvasWidth, canvasHeight, padding, blockStack, colorSecondary);

    if (!config.pause) {
        setInterval(function() {

            //colorPrimary = colors[Math.floor(Math.random() * colors.length)];
            //colorSecondary = colors[Math.floor(Math.random() * colors.length)];
            //while( colorSecondary == colorPrimary){
            //colorSecondary = colors[Math.floor(Math.random() * colors.length)];
            //}
            var timestamp = getRandomInt(0, 900);
            populateMatrix(ctx, canvasWidth, canvasHeight, padding, blockStack, colorSecondary);
            splitnFill(ctx, canvasWidth, canvasHeight, padding, blockStack, colorPrimary, timestamp);

        }, config.time);
    } else {

        var timestamp = getRandomInt(0, 900);
        populateMatrix(ctx, canvasWidth, canvasHeight, padding, blockStack, colorSecondary);
        splitnFill(ctx, canvasWidth, canvasHeight, padding, blockStack, colorPrimary, timestamp);

    }
}
