/*----------------------minBlock.js------------*/
/* Copyright (C) flouthoc (gunnerar7@gmail.com)
 * Written by http://github.com/flouthoc
 * Under MIT Lisence
 * Contributors :
 * Alvaro Pinot @alvaropinot http://github.com/alvaropinot
 * GreenLantern101 https://github.com/GreenLantern101
 */

var minBlock = function(config) {

    if (!config.divId) {
        return;
    }

    //private vars
    var blockStack = config.numBlocks;
    //number of blocks per edge must be at least three
    blockStack = Math.max(blockStack, 3);

    var canvas = document.getElementById(config.divId);
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext('2d');
    var padding = 20;

    var Height = canvasHeight - 2 * padding;
    var Width = canvasWidth - 2 * padding;
    //number of squares vertically and horizontally
    var squareHeight = Height / blockStack;
    var squareWidth = Width / blockStack;

    var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];

    //TODO: make light/dark colors? contrasting combo


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

    //accounts for border padding
    canvas.style.background = colorPrimary;

    if (!config.pause) {
        setInterval(function() {
            refresh();
        }, config.time);
    } else {
        refresh();
    }
    //generate a new random matrix
    function refresh() {
        var timestamp = getRandomInt(0, 900);
        fillMatrix(colorSecondary);
        randFill(colorPrimary, timestamp);
    }
    //fills entire matrix a single color
    function fillMatrix(color) {
        for (var i = 0; i < blockStack; i++) {
            for (var j = 0; j < blockStack; j++) {
                drawSquare(color, j, i);
            }
        }
    }
    //draws a single color square
    function drawSquare(color, matrixX, matrixY) {
        var x = padding + (matrixX * squareWidth);
        var y = padding + (matrixY * squareHeight);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x, y, squareWidth, squareHeight);
        ctx.fill();
        ctx.closePath();
    }

    function getLocation(number) {
        var a = Math.floor(number / blockStack);
        var b = number % blockStack;
        return [a, b];
    }

    function randFill(color, number) {
        //converts number into an array of its digits
        //var digits = String(number).split('').map(Number);
        var numBlocksReplace = getRandomInt(blockStack * blockStack * .25, blockStack * blockStack * .75);
        for (var i = 0; i < numBlocksReplace; i++) {
            var coordinate = getLocation(getRandomInt(0, blockStack * blockStack - 1));
            drawSquare(color, coordinate[1], coordinate[0]);
        }
    }

    function getRandomInt(min, max) {
        //force integers
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
