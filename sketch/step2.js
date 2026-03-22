let ballX;
let ballY;
let ballSpeedX;
let ballSpeedY;
let ballRadius;

function setup() {
    createCanvas(600, 400);
    ballX = width / 2;
    ballY = height / 2;
    ballSpeedX = 5;
    ballSpeedY = 5;
    ballRadius = 15;
}

function draw() {
    background(0);
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    circle(ballX, ballY, ballRadius * 2);
}
