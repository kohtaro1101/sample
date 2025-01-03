// js/scripts.js

function setup() {
    // キャンバスのサイズを設定
    createCanvas(400, 400);
    background(220);
}

function draw() {
    // 円を描画
    fill(100, 150, 200);
    ellipse(mouseX, mouseY, 50, 50);
}
