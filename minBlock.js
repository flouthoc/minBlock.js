/*----------------------minBlock.js------------*/
/* Copyright (C) flouthoc (gunnerar7@gmail.com)
 * Written by http://github.com/flouthoc
 * Under MIT Lisence
 * Contributors :
 * Alvaro Pinot @alvaropinot http://github.com/alvaropinot
 * GreenLantern101 https://github.com/GreenLantern101
 * ndsvw https://github.com/ndsvw
 */

var minBlock = function (config) {

    //TODO: make light/dark colors? contrasting combo
    var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];

    var options = {};

    if (typeof config === "string") {
        options.canvasID = config;
    } else if (typeof config !== "object" || !config.canvasID) {
        return;
    }

    options.canvasID = options.canvasID || config.canvasID;
    options.blocksPerEdge = Math.max(config.blocksPerEdge || 5, 3);
    options.padding = (typeof config.padding === "number") ? config.padding : 20;
    options.spacing = (typeof config.spacing === "number") ? config.spacing : 0;
    options.color = (typeof config.color === "object") ? config.color : getRandomColorPair();

    var canvas = document.getElementById(options.canvasID);
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext('2d');

    var Height = canvasHeight - 2 * options.padding;
    var Width = canvasWidth - 2 * options.padding;
    var squareHeight = Height / options.blocksPerEdge;
    var squareWidth = Width / options.blocksPerEdge;

    //render
    function render() {
        canvas.style.background = options.color.primary;
        fillMatrix(options.color.secondary);
        randFill(options.color.primary);
    }

    //fills entire matrix a single color
    function fillMatrix(color) {
        for (var i = 0; i < options.blocksPerEdge; i++) {
            for (var j = 0; j < options.blocksPerEdge; j++) {
                drawSquare(color, j, i);
            }
        }
    }

    //draws a single color square
    function drawSquare(color, matrixX, matrixY) {
        var x = options.padding + (matrixX * squareWidth);
        var y = options.padding + (matrixY * squareHeight);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x + options.spacing, y + options.spacing, squareWidth - options.spacing * 2, squareHeight - options.spacing * 2);
        ctx.fill();
        ctx.closePath();
    }

    //get a random color pair
    function getRandomColorPair() {
        var colorPrimary = colors[Math.floor(Math.random() * colors.length)];
        var colorSecondary = colors[Math.floor(Math.random() * colors.length)];
        while (colorSecondary === colorPrimary) {
            colorSecondary = colors[Math.floor(Math.random() * colors.length)];
        }
        return { primary: colorPrimary, secondary: colorSecondary };
    }

    //get the location dependant on a number
    function getLocation(number) {
        var a = Math.floor(number / options.blocksPerEdge);
        var b = number % options.blocksPerEdge;
        return [a, b];
    }

    //fill the canvas with blocks at random positions
    function randFill(color) {
        var numBlocksReplace = getRandomInt(options.blocksPerEdge * options.blocksPerEdge * .25, options.blocksPerEdge * options.blocksPerEdge * .75);
        var replacedBlocks = [];
        while (replacedBlocks.length < numBlocksReplace) {
            var rand = getRandomInt(0, options.blocksPerEdge * options.blocksPerEdge - 1);
            if (replacedBlocks.indexOf(rand) === -1) {
                var coordinate = getLocation(rand);
                drawSquare(color, coordinate[1], coordinate[0]);
                replacedBlocks.push(rand);
            }
        }
    }

    //get a random integer between min and max
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render()
}
