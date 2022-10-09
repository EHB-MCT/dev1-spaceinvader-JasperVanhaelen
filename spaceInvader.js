"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

// Joni sent me a new space invader because I already made my one last year.

drawSpaceInvader();

function drawSpaceInvader() {
    context.fillRect(50, 50, 300, 300);
    context.fillStyle = "#66FF00"; // bright green 
    context.fillRect(125, 75, 50, 50);
    context.fillRect(225, 75, 50, 50);
    context.fillRect(75, 125, 50, 150);
    context.fillRect(125, 175, 50, 150);
    context.fillRect(125, 275, 150, 50);
    context.fillRect(225, 175, 50, 100);
    context.fillRect(275, 125, 50, 150);
}