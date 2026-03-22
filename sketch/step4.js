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

    // 右に当たったら
    if (width < ballX + ballRadius) {
        ballSpeedX = -ballSpeedX;
    }

    // 左に当たったら
    if (ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }

    // 上に当たったら
    if (ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    }

    // 下に当たったら
    if (ballY + ballRadius > height) {
        ballSpeedX = 0;
        ballSpeedY = 0;
        fill("white");
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
    }

    circle(ballX, ballY, ballRadius * 2);
}
