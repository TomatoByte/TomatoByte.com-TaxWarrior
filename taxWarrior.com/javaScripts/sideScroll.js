
// Canvas
var canvasWidth = 1010; //1424;(windowWidth-200);
var canvasHeight = 620; //720;(windowHeight-200);
let delayCount = 0;
let menuCheck = 0;
let jjCheck = 0;



// Player
let playerX = (canvasWidth/2);
let playerY = (canvasHeight-100);
let playerScore = 500;
let highScore = 0;
let readyCheck = 0;
let damageShow = 0;
let difficultyRating = 1;
let charWidth = 0;
let charHeight = 0;
let taxesPaid = 0;


// Sound
let born8;
let born8T = 0;
let coinsSound;
let nefariousChuckle;

//Graphics
let warriorPNG;
let charSelected;
let charVWoot = 'Victbert VWootton';
let charCam = 'Sir Robvid Cameron of Locksley';
let charShane = 'Shirlette Shane';
let charPost = 'Megawaite Postalman';
let CameronPNG;
let WoottenPNG;
let CranePNG;
let PostlePNG;
let moneyPNG;
let samPNG;
let leftPic;
let rightPic;
let downPic;
let upPic;

// Money
let money1X;
let money1Y;
let money2X;
let money2Y;
let money3X;
let money3Y;
let money4X;
let money4Y;
let money5X;
let money5Y;
let money6X;
let money6Y;
let money7X;
let money7Y;
let money8X;
let money8Y;
let money9X;
let money9Y;
let money10X;
let money10Y;

// Sams
let sam1X;
let sam1Y;
let sam2X;
let sam2Y;
let sam3X;
let sam3Y;
let sam4X;
let sam4Y;
let sam5X;
let sam5Y;
let sam6X;
let sam6Y;
let sam7X;
let sam7Y;
let sam8X;
let sam8Y;
let sam9X;
let sam9Y;
let sam10X;
let sam10Y;

// Sams Movement
let samBigSpeedX = 2;
let samBigSpeedY = 2;
let samMedSpeedX = 0.5;
let samMedSpeedY = 0.5;
let samSmallSpeedX = 0.25;
let samSmallSpeedY = 0.25;
let sam1XDir = 1;
let sam1YDir = 1;
let sam2XDir = 1;
let sam2YDir = 1;
let sam3XDir = 1;
let sam3YDir = 1;
let sam4XDir = 1;
let sam4YDir = 1;
let sam5XDir = 1;
let sam5YDir = 1;
let sam6XDir = 1;
let sam6YDir = 1;
let sam7XDir = 1;
let sam7YDir = 1;
let sam8XDir = 1;
let sam8YDir = 1;
let sam9XDir = 1;
let sam9YDir = 1;
let sam10XDir = 1;
let sam10YDir = 1;

var cnv;

function preload() {
  // Images
  //warriorPNG = loadImage("Wootten.png");
  CameronPNG = loadImage("assets/images/Cameron.png");
  WoottenPNG = loadImage("assets/images/Wootten.png");
  CranePNG = loadImage("assets/images/Crane.png");
  PostlePNG = loadImage("assets/images/PostleWaite.png");
  moneyPNG = loadImage("assets/images/Money.png");
  samPNG = loadImage("assets/images/Sam.png");
  leftPic = loadImage("assets/images/left.png");
  rightPic = loadImage("assets/images/right.png");
  downPic = loadImage("assets/images/down.png");
  upPic = loadImage("assets/images/up.png");

  // Sounds
  born8 = loadSound("assets/sounds/Born8bit.mp3");
  coinsSound = loadSound("assets/sounds/Coins.mp3");
  nefariousChuckle = loadSound("assets/sounds/NefariousChuckle.mp3");
  
  // Money
  money1X = random(5,canvasWidth - 40);
  money1Y = random(5,canvasHeight - 25);
  money2X = random(5,canvasWidth - 40);
  money2Y = random(5,canvasHeight - 25);
  money3X = random(5,canvasWidth - 40);
  money3Y = random(5,canvasHeight - 25);
  money4X = random(5,canvasWidth - 40);
  money4Y = random(5,canvasHeight - 25);
  money5X = random(5,canvasWidth - 40);
  money5Y = random(5,canvasHeight - 25);
  money6X = random(5,canvasWidth - 40);
  money6Y = random(5,canvasHeight - 25);
  money7X = random(5,canvasWidth - 40);
  money7Y = random(5,canvasHeight - 25);
  money8X = random(5,canvasWidth - 40);
  money8Y = random(5,canvasHeight - 25);
  money9X = random(5,canvasWidth - 40);
  money9Y = random(5,canvasHeight - 25);
  money10X = random(5,canvasWidth - 40);
  money10Y = random(5,canvasHeight - 25);

// Sams
  sam1X = random(5,canvasHeight - 60);
  sam1Y = random(5,canvasHeight - 60);
  sam2X = random(5,canvasWidth - 40);
  sam2Y = random(5,canvasHeight - 60);
  sam3X = random(5,canvasWidth - 40);
  sam3Y = random(5,canvasHeight - 60);
  sam4X = random(5,canvasWidth - 40);
  sam4Y = random(5,canvasHeight - 60);
  sam5X = random(5,canvasWidth - 40);
  sam5Y = random(5,canvasHeight - 60);
  sam6X = random(5,canvasWidth - 40);
  sam6Y = random(5,canvasHeight - 60);
  sam7X = random(5,canvasWidth - 40);
  sam7Y = random(5,canvasHeight - 60);
  sam8X = random(5,canvasWidth - 40);
  sam8Y = random(5,canvasHeight - 60);
  sam9X = random(5,canvasWidth - 40);
  sam9Y = random(5,canvasHeight - 60);
  sam10X = random(5,canvasWidth - 40);
  sam10Y = random(5,canvasHeight - 60);
}

function centerCanvas() {
  var x = (windowWidth - canvasWidth) / 2;
  var y = (windowHeight - canvasHeight) / 2;
  cnv.position(x, y);
}

function setup() {
  frameRate(60);
  cnv = createCanvas(canvasWidth,canvasHeight);
  cnv.style('display', 'block');

  centerCanvas();
}

function charSel()  {
    if (menuCheck == 1) {
        warriorPNG = WoottenPNG;
        charSelected = charVWoot;
        charWidth = 45;
        charHeight = 85;
    }
    if (menuCheck == 2) {
        warriorPNG = CameronPNG;
        charSelected = charCam;
        charWidth = 45;
        charHeight = 85;
    }
    if (menuCheck == 3) {
        warriorPNG = CranePNG;
        charSelected = charShane;
        charWidth = 45;
        charHeight = 85;
    }
    if (menuCheck == 4) {
        warriorPNG = PostlePNG;
        charSelected = charPost;
        charWidth = 60;
        charHeight = 65;
    }
}

function overRect(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
    } else {
        return false;
    }
}

function mousePressed() {
    if (menuCheck == 0){
        if (overRect(35,475,235,125)) {
            menuCheck = 1;
        }
        if (overRect(275,475,235,125)) {
            menuCheck = 2;
        }
        if (overRect(520,475,235,125)) {
            menuCheck = 3;
        }
        if (overRect(765,475,235,125)) {
            menuCheck = 4;
        }
    }
}

function keyTyped(){
  if (key === 'p'){
    if (born8T == 2) {
      born8.play();
      born8T = 1;
      }
    else if (born8T == 1) {
    born8.pause();
    born8T = 2;
    }
  }
// come back here to adjust 
  if (key === 'j') {
    jjCheck += 1;
  }
  if (key === 'u') {
      jjCheck = 0;
  }
  if (key === 'g') {
    window.location.href = 'http://www.google.com';
  }
  if (key === 'q') {
    window.location.href = 'index.html';
  }

  if (key === '1') {
    menuCheck = 1;
  }
  if (key === '2') {
    menuCheck = 2;
  }
  if (key === '3') {
    menuCheck = 3;
  }
  if (key === '4') {
    menuCheck = 4;
  }
}

function playerControl(){
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }
  
  if (keyIsDown(65)) {
    playerX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
  
  if (keyIsDown(68)) {
    playerX += 5;
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerY -= 5;
  }
  
  if (keyIsDown(87)) {
    playerY -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerY += 5;
  }
  
  if (keyIsDown(83)) {
    playerY += 5;
  }

  if (mouseIsPressed) {
    playerX = mouseX - 22;
    playerY = mouseY - 43;
  }
}

function collisionDetection(){
// Player Center
  var pXc = playerX+(charWidth / 2);
  var pYc = playerY+(charHeight / 2);
// Money Centers
  var m1Xc = money1X+20;
  var m1Yc = money1Y+13;
  var m2Xc = money2X+20;
  var m2Yc = money2Y+13;
  var m3Xc = money3X+20;
  var m3Yc = money3Y+13;
  var m4Xc = money4X+20;
  var m4Yc = money4Y+13;
  var m5Xc = money5X+20;
  var m5Yc = money5Y+13;
  var m6Xc = money6X+20;
  var m6Yc = money6Y+13;
  var m7Xc = money7X+20;
  var m7Yc = money7Y+13;
  var m8Xc = money8X+20;
  var m8Yc = money8Y+13;
  var m9Xc = money9X+20;
  var m9Yc = money9Y+13;
  var m10Xc = money10X+20;
  var m10Yc = money10Y+13;
  // Sam Centers
  var s1Xc = sam1X+40;
  var s1Yc = sam1Y+60;
  var s2Xc = sam2X+30;
  var s2Yc = sam2Y+45;
  var s3Xc = sam3X+30;
  var s3Yc = sam3Y+45;
  var s4Xc = sam4X+20;
  var s4Yc = sam4Y+30;
  var s5Xc = sam5X+20;
  var s5Yc = sam5Y+30;
  var s6Xc = sam6X+20;
  var s6Yc = sam6Y+30;
  var s7Xc = sam7X+20;
  var s7Yc = sam7Y+30;
  var s8Xc = sam8X+20;
  var s8Yc = sam8Y+30;
  var s9Xc = sam9X+20;
  var s9Yc = sam9Y+30;
  var s10Xc = sam10X+20;
  var s10Yc = sam10Y+30;
  

  // Distance
    //Money
  var distMon1 = dist(m1Xc,m1Yc,pXc,pYc);
  var distMon2 = dist(m2Xc,m2Yc,pXc,pYc);
  var distMon3 = dist(m3Xc,m3Yc,pXc,pYc);
  var distMon4 = dist(m4Xc,m4Yc,pXc,pYc);
  var distMon5 = dist(m5Xc,m5Yc,pXc,pYc);
  var distMon6 = dist(m6Xc,m6Yc,pXc,pYc);
  var distMon7 = dist(m7Xc,m7Yc,pXc,pYc);
  var distMon8 = dist(m8Xc,m8Yc,pXc,pYc);
  var distMon9 = dist(m9Xc,m9Yc,pXc,pYc);
  var distMon10 = dist(m10Xc,m10Yc,pXc,pYc);
    //Sams
  var distSam1X = dist(s1Xc,0,pXc,0);
  var distSam1Y = dist(0,s1Yc,0,pYc);
  var distSam2X = dist(s2Xc,0,pXc,0);
  var distSam2Y = dist(0,s2Yc,0,pYc);
  var distSam3X = dist(s3Xc,0,pXc,0);
  var distSam3Y = dist(0,s3Yc,0,pYc);
  var distSam4X = dist(s4Xc,0,pXc,0);
  var distSam4Y = dist(0,s4Yc,0,pYc);
  var distSam5X = dist(s5Xc,0,pXc,0);
  var distSam5Y = dist(0,s5Yc,0,pYc);
  var distSam6X = dist(s6Xc,0,pXc,0);
  var distSam6Y = dist(0,s6Yc,0,pYc);
  var distSam7X = dist(s7Xc,0,pXc,0);
  var distSam7Y = dist(0,s7Yc,0,pYc);
  var distSam8X = dist(s8Xc,0,pXc,0);
  var distSam8Y = dist(0,s8Yc,0,pYc);
  var distSam9X = dist(s9Xc,0,pXc,0);
  var distSam9Y = dist(0,s9Yc,0,pYc);
  var distSam10X = dist(s10Xc,0,pXc,0);
  var distSam10Y = dist(0,s10Yc,0,pYc);


  // Resolution
    //Money
  if (distMon1 < 35) {
    money1X = random(5,canvasWidth - 40);
    money1Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }

  if (distMon2 < 35) {
    money2X = random(5,canvasWidth - 40);
    money2Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }

  if (distMon3 < 35) {
    money3X = random(5,canvasWidth - 40);
    money3Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon4 < 35) {
    money4X = random(5,canvasWidth - 40);
    money4Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon5 < 35) {
    money5X = random(5,canvasWidth - 40);
    money5Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon6 < 35) {
    money6X = random(5,canvasWidth - 40);
    money6Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon7 < 35) {
    money7X = random(5,canvasWidth - 40);
    money7Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon8 < 35) {
    money8X = random(5,canvasWidth - 40);
    money8Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon9 < 35) {
    money9X = random(5,canvasWidth - 40);
    money9Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
  if (distMon10 < 35) {
    money10X = random(5,canvasWidth - 40);
    money10Y = random(5,canvasHeight - 25);
    playerScore += 100;
    coinsSound.play();
    damageShow = 0;
  }
    // Sams
  if (distSam1X <= 60 && distSam1Y <= 85) {
      if (jjCheck < 2) {
        sam1X = random(5,canvasWidth - 80);
        sam1Y = random(5,canvasHeight - 120);
        damageShow = 500;
        playerScore -= 500;
        taxesPaid += 500;
        nefariousChuckle.play();
      }
    }
  
  if (distSam2X <= 50 && distSam2Y <= 80) {
    sam2X = random(5,canvasWidth - 60);
    sam2Y = random(5,canvasHeight - 90);
    damageShow = 300;
    playerScore -= 300;
    taxesPaid += 300;
    nefariousChuckle.play();
  }
  
  if (distSam3X <= 50 && distSam3Y <= 80) {
      if (jjCheck < 2) {
        sam3X = random(5,canvasWidth - 60);
        sam3Y = random(5,canvasHeight - 90);
        damageShow = 300;
        playerScore -= 300;
        taxesPaid += 300;
        nefariousChuckle.play();
      }
  }
  
  if (distSam4X <= 40 && distSam4Y <= 60) {
    sam4X = random(5,canvasWidth - 40);
    sam4Y = random(5,canvasHeight - 60);
    damageShow = 100;
    playerScore -= 100;
    taxesPaid += 100;
    nefariousChuckle.play();
  }

  if (distSam5X <= 40 && distSam5Y <= 60) {
    sam5X = random(5,canvasWidth - 40);
    sam5Y = random(5,canvasHeight - 60);
    damageShow = 100;
    playerScore -= 100;
    taxesPaid += 100;
    nefariousChuckle.play();
  }

  if (distSam6X <= 40 && distSam6Y <= 60) {
      if (jjCheck < 2) {
        sam6X = random(5,canvasWidth - 40);
        sam6Y = random(5,canvasHeight - 60);
        damageShow = 100;
        playerScore -= 100;
        taxesPaid += 100;
        nefariousChuckle.play();
      }
  }

  if (distSam7X <= 40 && distSam7Y <= 60) {
    sam7X = random(5,canvasWidth - 40);
    sam7Y = random(5,canvasHeight - 60);
    damageShow = 100;
    playerScore -= 100;
    taxesPaid += 100;
    nefariousChuckle.play();
  }

  if (distSam8X <= 40 && distSam8Y <= 60) {
    sam8X = random(5,canvasWidth - 40);
    sam8Y = random(5,canvasHeight - 60);
    damageShow = 100;
    playerScore -= 100;
    taxesPaid += 100;
    nefariousChuckle.play();
  }

  if (distSam9X <= 40 && distSam9Y <= 60) {
      if (jjCheck < 2) {
        sam9X = random(5,canvasWidth - 40);
        sam9Y = random(5,canvasHeight - 60);
        damageShow = 100;
        playerScore -= 100;
        taxesPaid += 100;
        nefariousChuckle.play();
      }
  }

  if (distSam10X <= 40 && distSam10Y <= 60) {
    sam10X = random(5,canvasWidth - 40);
    sam10Y = random(5,canvasHeight - 60);
    damageShow = 100;
    playerScore -= 100;
        taxesPaid += 100;
    nefariousChuckle.play();
  }
}

function updateScore(){
  if (highScore < playerScore){
    highScore = playerScore;
  }
}

function samMovement() {

  //Sam1
  sam1X = sam1X + samBigSpeedX * sam1XDir;
  sam1Y = sam1Y + samBigSpeedY * sam1YDir;
  
  //Sam2
  sam2X = sam2X + samMedSpeedX * sam2XDir;
  sam2Y = sam2Y + samMedSpeedY * sam2YDir;
  
  //Sam3
  sam3X = sam3X + samMedSpeedX * sam3XDir;
  sam3Y = sam3Y + samMedSpeedY * sam3YDir;
  
  //Sam4
  sam4X = sam4X + samMedSpeedX * sam4XDir;
  sam4Y = sam4Y + samMedSpeedY * sam4YDir;
  
  //Sam5
  sam5X = sam5X + samMedSpeedX * sam5XDir;
  sam5Y = sam5Y + samMedSpeedY * sam5YDir;
  
  //Sam6
  sam6X = sam6X + samSmallSpeedX * sam6XDir;
  sam6Y = sam6Y + samSmallSpeedY * sam6YDir;

  //Sam7
  sam7X = sam7X + samSmallSpeedX * sam7XDir;
  sam7Y = sam7Y + samSmallSpeedY * sam7YDir;

  //Sam8
  sam8X = sam8X + samSmallSpeedX * sam8XDir;
  sam8Y = sam8Y + samSmallSpeedY * sam8YDir;

  //Sam9
  sam9X = sam9X + samSmallSpeedX * sam9XDir;
  sam9Y = sam9Y + samSmallSpeedY * sam9YDir;

  //Sam10
  sam10X = sam10X + samSmallSpeedX * sam10XDir;
  sam10Y = sam10Y + samSmallSpeedY * sam10YDir;
}

function samBounce() {
  // Baddie Bounce
  //Sam1
  if (sam1X > canvasWidth - 80 || sam1X < 0) {
    sam1XDir *= -1;
  }
  if (sam1Y > canvasHeight - 120 || sam1Y < 0) {
    sam1YDir *= -1;
  }
  //Sam2
  if (sam2X > canvasWidth - 60 || sam2X < 0) {
    sam2XDir *= -1;
  }
  if (sam2Y > canvasHeight - 90 || sam2Y < 0) {
    sam2YDir *= -1;
  }
  //Sam3
  if (sam3X > canvasWidth - 60 || sam3X < 0) {
    sam3XDir *= -1;
  }
  if (sam3Y > canvasHeight - 90 || sam3Y < 0) {
    sam3YDir *= -1;
  }
  //Sam4
  if (sam4X > canvasWidth - 40 || sam4X < 0) {
    sam4XDir *= -1;
  }
  if (sam4Y > canvasHeight - 60 || sam4Y < 0) {
    sam4YDir *= -1;
  }
  //Sam5
  if (sam5X > canvasWidth - 40 || sam5X < 0) {
    sam5XDir *= -1;
  }
  if (sam5Y > canvasHeight - 60 || sam5Y < 0) {
    sam5YDir *= -1;
  }
  //Sam6
  if (sam6X > canvasWidth - 40 || sam6X < 0) {
    sam6XDir *= -1;
  }
  if (sam6Y > canvasHeight - 60 || sam6Y < 0) {
    sam6YDir *= -1;
  }
  //Sam7
  if (sam7X > canvasWidth - 40 || sam7X < 0) {
    sam7XDir *= -1;
  }
  if (sam7Y > canvasHeight - 60 || sam7Y < 0) {
    sam7YDir *= -1;
  }
  //Sam8
  if (sam8X > canvasWidth - 40 || sam8X < 0) {
    sam8XDir *= -1;
  }
  if (sam8Y > canvasHeight - 60 || sam8Y < 0) {
    sam8YDir *= -1;
  }
  //Sam9
  if (sam9X > canvasWidth - 40 || sam9X < 0) {
    sam9XDir *= -1;
  }
  if (sam9Y > canvasHeight - 60 || sam9Y < 0) {
    sam9YDir *= -1;
  }
  //Sam10
  if (sam10X > canvasWidth - 40 || sam10X < 0) {
    sam10XDir *= -1;
  }
  if (sam10Y > canvasHeight - 60 || sam10Y < 0) {
    sam10YDir *= -1;
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


function updateDiff() {
    //Update Difficulty
  //var timeDiff = millis();
    if (playerScore == highScore){
        if (highScore >= 1500){
            if (difficultyRating == 1){
                samBigSpeedX *= 1.25;
                samBigSpeedY *= 1.25;
                samMedSpeedX *= 1.40;
                samMedSpeedY *= 1.40;
                samSmallSpeedX *= 1.40;
                samSmallSpeedY *= 1.40;
                difficultyRating = 2;
            }
        }
        if (highScore >= 3000){
            if (difficultyRating == 2){
              samBigSpeedX *= 1.2;
              samBigSpeedY *= 1.2;
              samMedSpeedX *= 1.35;
              samMedSpeedY *= 1.35;
              samSmallSpeedX *= 1.40;
              samSmallSpeedY *= 1.40;
              difficultyRating = 3
            }
        }
        if (highScore >= 4500){
            if (difficultyRating == 3){
              samBigSpeedX *= 1.2;
              samBigSpeedY *= 1.2;
              samMedSpeedX *= 1.35;
              samMedSpeedY *= 1.35;
              samSmallSpeedX *= 1.40;
              samSmallSpeedY *= 1.40;
              difficultyRating = 4;
            }
        }
        if (highScore >= 6000){
            if (difficultyRating == 4){
              samBigSpeedX *= 1.15;
              samBigSpeedY *= 1.15;
              samMedSpeedX *= 1.3;
              samMedSpeedY *= 1.3;
              samSmallSpeedX *= 1.3;
              samSmallSpeedY *= 1.3;
              difficultyRating = 5;
            }
        }
        if (highScore >= 7500){
            if (difficultyRating == 5){
              samBigSpeedX *= 1.15;
              samBigSpeedY *= 1.15;
              samMedSpeedX *= 1.3;
              samMedSpeedY *= 1.3;
              samSmallSpeedX *= 1.3;
              samSmallSpeedY *= 1.3;
              difficultyRating = 6;
            }
        }
        if (highScore >= 9000){
          if (difficultyRating == 6){
            samBigSpeedX *= 1.15;
            samBigSpeedY *= 1.15;
            samMedSpeedX *= 1.3;
            samMedSpeedY *= 1.3;
            samSmallSpeedX *= 1.3;
            samSmallSpeedY *= 1.3;
            difficultyRating = 7;
          }
        }
        if (highScore >= 10500){
          if (difficultyRating == 7){
            samBigSpeedX *= 1.15;
            samBigSpeedY *= 1.15;
            samMedSpeedX *= 1.3;
            samMedSpeedY *= 1.3;
            samSmallSpeedX *= 1.3;
            samSmallSpeedY *= 1.3;
            difficultyRating = 8;
          }
        }
        if (highScore >= 12000){
          if (difficultyRating == 8){
            samBigSpeedX *= 1.15;
            samBigSpeedY *= 1.15;
            samMedSpeedX *= 1.3;
            samMedSpeedY *= 1.3;
            samSmallSpeedX *= 1.3;
            samSmallSpeedY *= 1.3;
            difficultyRating = 9
          }
        }
        if (highScore >= 13500){
          if (difficultyRating == 9){
            samBigSpeedX *= 1.15;
            samBigSpeedY *= 1.15;
            samMedSpeedX *= 1.3;
            samMedSpeedY *= 1.3;
            samSmallSpeedX *= 1.3;
            samSmallSpeedY *= 1.3;
            difficultyRating = 10;
          }
        }
    }
}

function touchControl() {
    if (readyCheck === 0) {
        if (keyIsDown(32)) {
            readyCheck = 1;
            if (born8T == 2){
                born8.play();
                born8T = 1;
            }
        }
        if (mouseIsPressed) {
            readyCheck = 1;
            if (born8T == 2){
                born8.play();
                born8T = 1;
            }
        }
    } 
    else if (playerScore <= 0) {
        if (mouseIsPressed) {
            if (delayCount == 1) {
                window.location.href = 'index.html'
            }  
            if (delayCount == 0) {
                sleep(1500);
                delayCount = 1;
            }
        }
    }
}



function draw() {
  updateScore();
  updateDiff();
  clear();

    // Main
    if (readyCheck == 1){
        playerControl();
        collisionDetection();
        samBounce();
        samMovement();
        charSel();
        clear();
        background ('#F8F8F8'); //('#969EB2');
  
        // Draw Player
        image(warriorPNG,playerX,playerY,charWidth,charHeight);


        // Draw Money
        image(moneyPNG,money1X,money1Y,40,25);
        image(moneyPNG,money2X,money2Y,40,25);
        image(moneyPNG,money3X,money3Y,40,25);
        image(moneyPNG,money4X,money4Y,40,25);
        image(moneyPNG,money5X,money5Y,40,25);
        image(moneyPNG,money6X,money6Y,40,25);
        image(moneyPNG,money7X,money7Y,40,25);
        image(moneyPNG,money8X,money8Y,40,25);
        image(moneyPNG,money9X,money9Y,40,25);
        image(moneyPNG,money10X,money10Y,40,25);

        // Draw Sams

        image(samPNG,sam1X,sam1Y,80,120);
        image(samPNG,sam2X,sam2Y,60,90);
        image(samPNG,sam3X,sam3Y,60,90);
        image(samPNG,sam4X,sam4Y,40,60);
        image(samPNG,sam5X,sam5Y,40,60);
        image(samPNG,sam6X,sam6Y,40,60);
        image(samPNG,sam7X,sam7Y,40,60);
        image(samPNG,sam8X,sam8Y,40,60);
        image(samPNG,sam9X,sam9Y,40,60);
        image(samPNG,sam10X,sam10Y,40,60);

  
        // Score Board
        textSize(18);
        fill('#000000');
        text("" + charSelected, 20, 30);
        fill('blue');
        text("Level " + difficultyRating, 20, 52);
        fill('#58335c');
        text("High Score: $" + highScore, 20, 74);
        fill('green');
        text("Score: $" + playerScore, 20, 96);
        fill('#AB0000');
        text("Taxes Paid: $" + taxesPaid,20, 118);
    }

    if (damageShow == 100){
        textSize(12);
        fill('#AB0000');
        text("-$100",playerX+10,playerY-10);    
    }
    if (damageShow == 300) {
        textSize(12);
        fill('#AB0000');
        text("-$300",playerX+10,playerY-10);
    }
    if (damageShow == 500) {
            textSize(12);
            fill('#AB0000');
            text("-$500",playerX+10,playerY-10);
    }

    // Game over
    if (playerScore < 0){
        if (born8T == 1){
            born8.pause();
            born8T = 2;
        }
        clear();
        background('#ffffff');
        textSize(38);
        fill('#a92818');
        text("Oh No! You Went Bankrupt!", (canvasWidth * .5) - 240,(canvasHeight * .5) - 85);
        textSize(38);
        text("Game Over!", (canvasWidth * .5) - 100,(canvasHeight * .5) - 35);
        fill('#58335c'); //#0e58c9');
        textSize(28);
        text("Your Highest Score Was: $" + highScore, (canvasWidth * .5) - 200, (canvasHeight *.5) + 10);
        textSize(18);
        text("Press 'q' or Touch to Quit!",(canvasWidth *.5) - 105,(canvasHeight * .5) + 40);
        touchControl(); 
    }

    if (playerScore > 14000){
        if (born8T == 1){
            born8.pause();
            born8T = 2;
            born8.play();
        }
        textSize(38);
        fill('#11B500');
        text("Congratulations!!", (canvasWidth * .5) - 150,(canvasHeight * .5) - 250);
        textSize(28);
        text("You Have Proven Yourself an Adept Tax Warrior Indeed!", (canvasWidth * .5) - 350, canvasHeight *.5);
        text("Your Highest Score is: $" + highScore, (canvasWidth * .5) - 200, (canvasHeight *.5) + 45);
        textSize(18);
        text("Thanks For Playing! Press 'q' to Quit!",(canvasWidth *.5) - 205,(canvasHeight * .5) + 300);
    }

    if (menuCheck == 0) {
        clear();
        background ('#F8F8F8');        
        textSize(38);
        fill('#58335c'); //#0e58c9');
        text("Instructions", (canvasWidth * .5) - 100, 40);
        textSize(18);
        text("You Start with $500 and the Future In Mind. Gather as Much", 25, 75);
        text("Money as You Can, But You Must Take Care to Avoid Uncle ", 25, 100);
        text("Sam Because if He Catches You the Price Will Be Steep!", 25, 125);
        textSize(12);
        fill('red'); //#0e58c9');
        text("Little Sam = -$100", 570, 125);
        image(samPNG,595,135,40,60);
        text("Medium Sam = -$300", 692, 95);
        image(samPNG,718,105,60,90);
        text("Big Sam = -$500", 850, 65);
        image(samPNG,855,75,80,120);
        fill('green'); //#0e58c9');
        text("= $100", 585, 80)
        image(moneyPNG,540,65,40,25);
        
        textSize(18);
        fill('black'); //#0e58c9');
        text("Arrow Key or 'a' Moves Warrior Left!", 170,180);
        image(leftPic,55,160,30,30);
        text("Arrow Key or 'd ' Moves Warrior Right!", 155,240);
        image(rightPic,55,220,30,30);
        text("Arrow Key or 'w' Moves Warrior Up!", 175,300);
        image(upPic,55,280,30,30);
        text("Arrow Key or 's' Moves Warrior Down!", 155,360);
        image(downPic,55,340,30,30);
        text("'p' Pauses Music.", 685, 305);
        text("Don't Forget Mouse Clicks or Taps = Teleportation!", 550,255);
        text("'q' Quits the Game at Anytime.", 635, 355);
        
        textSize(28);
        fill('#000000'); //#0e58c9');
        text("Choose Your Warrior", 370, 430);

        textSize(14);
        fill('#4b017f'); //#0e58c9');
        text("The Eminent Victbert VWootton", 35,475);
        textSize(12);
        text("Bass Playing Legend and", 100,515);
        text("Partnership's Surgeon General.", 73,540);
        text("Click or Press 1", 123,580);
        image(WoottenPNG,25,500,45,85);

        textSize(14);
        fill('#43a500'); //#0e58c9');
        text("The Illustrious Sir Robvid Cameron", 275,475);
        text("of Locksley", 420,495);
        textSize(12);
        text("The prodigal son and", 375,515);
        text("and Taxation Super Genious.", 340,540);
        text("Click or Press 2", 380,580);
        image(CameronPNG,275,500,45,85);

        textSize(14);
        fill('#b70404'); //#0e58c9');
        text("The Distinguished Shirlette Shane", 520,475);
        textSize(12);
        text("Secret Agent and Corporate", 585,515);
        text("Tax/Espionage Extraordinaire.", 575,540);
        text("Click or Press 3", 610,580);
        image(CranePNG,520,500,45,85);

        textSize(14);
        fill('#001ea5'); //#0e58c9');
        text("The August Megawaite Postalman", 765,475);
        textSize(12);
        text("Actual Super Hero and well", 830,515);
        text("known Godfather of Tax.", 850,540);
        text("Click or Press 4", 870,580);
        image(PostlePNG,765,515,60,70);
        //mousePressed();
       
      //image(warriorPNG,20,500,45,85);
        
    }
    else if (readyCheck == 0){
        born8.pause();
        born8T = 2;
        clear();
        background('#F8F8F8');
        textSize(38);
        fill('#58335c');
        text("Ready!",(canvasWidth * .5) - 65,(canvasHeight * .5) - 105);
        text("Touch or Press Space to Start", (canvasWidth * .5) - 245, (canvasHeight *.5) + 20);
        //sleep(1500);
        touchControl();
    } 
}