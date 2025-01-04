let img;
let positions = [];
let sizes = [];  // 画像のサイズを保存するリスト
let stars = [];  // 星の位置を保存するリスト

function preload() {
  img = loadImage('地球.png');  // 画像を読み込む
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);  // 画像の描画位置を中心に設定
  
  // 星を一度だけ配置
  generateStars();
}

function draw() {
  // 背景を黒に設定（宇宙っぽい）
  background(0);

  // 静止した星を描画
  drawStars();

  // クリックした位置に画像をランダムなサイズで描画
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    let size = sizes[i];  // 画像のサイズを取得
    image(img, pos.x, pos.y, size, size);  // ランダムなサイズで描画
  }
}

function mousePressed() {
  // クリックした場所に画像の位置を追加
  positions.push(createVector(mouseX, mouseY));
  sizes.push(random(30, 100));  // 画像のサイズをランダムに設定（30から100の間）
}

// 星の位置を一度だけ生成
function generateStars() {
  let starCount = 200;  // 星の数
  
  // 星の位置をランダムに生成し、リストに保存
  for (let i = 0; i < starCount; i++) {
    let x = random(width);  // ランダムなX位置
    let y = random(height);  // ランダムなY位置
    
    stars.push(createVector(x, y));  // 星の位置をリストに追加
  }
}

// 静止した星を描画する関数
function drawStars() {
  fill(255);  // 星の色を白に設定
  noStroke();

  // 保存した星の位置を使って描画
  for (let star of stars) {
    let starSize = random(1, 3);  // 星のサイズ（ランダム）
    ellipse(star.x, star.y, starSize, starSize);  // 星を描画
  }
}