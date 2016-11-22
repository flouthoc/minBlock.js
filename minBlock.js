/*----------------------minBlock.js------------*/
/* Copyright (C) flouthoc (gunnerar7@gmail.com)
 * Written by http://github.com/flouthoc
 * Under MIT Lisence
 * Contributors : Alvaro Pinot @alvaropinot http://github.com/alvaropinot
 */

var minBlock = function(config) {

    if (!config.divId) {
        return;
    }

    //private vars
    var blockStack = 5;

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


    if (!config.randomColor) {
        config.randomColor = false;
    }
    if (!config.pause) {
        config.pause = false;
    }
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

    function refresh() {
        var timestamp = getRandomInt(0, 900);
        fillMatrix(colorSecondary);
        splitnFill(colorPrimary, timestamp);
    }
    //fills entire matrix a single color
    function fillMatrix(color) {
        for (var i = 0; i < blockStack; i++) {
            for (var j = 0; j < blockStack; j++) {
                enlight(color, j, i);
            }
        }
    }

    function putSquare(x, y, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x, y, squareWidth, squareHeight);
        ctx.fill();
        ctx.closePath();
    }
    //lights a single square a color
    function enlight(color, matrixX, matrixY) {
        putSquare(padding + (matrixX * squareWidth),
            padding + (matrixY * squareHeight), color);
    }

    function getLocation(number) {
        var a = Math.floor(number / blockStack);
        var b = number % blockStack;
        return [a, b];
    }

    function splitnFill(color, number) {
        //converts number into an array of its digits
        var digits = String(number).split('').map(Number);

        for (var i = 0; i < digits.length; i++) {
            var coordinate = getLocation(digits[i]);
            enlight(color, coordinate[1], coordinate[0]);
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
