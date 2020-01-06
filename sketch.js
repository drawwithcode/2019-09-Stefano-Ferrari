var uno, due, tre, quattro, cinque, sei, table;
var valueX=0, valueY=0, valueZ=0;
var iX=0, iY=0, iZ=0, i=0;


function preload(){
  table = loadImage("./assets/green_felt_basecolor.jpg")
  uno = loadImage("./assets/uno.png");
  due = loadImage("./assets/due.png");
  tre = loadImage("./assets/tre.png");
  quattro = loadImage("./assets/quattro.png");
  cinque = loadImage("./assets/cinque.png");
  sei = loadImage("./assets/sei.png");
  logo = loadImage("./assets/bovisa.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke(180, 10, 30);
  setShakeThreshold(25);
  frameRate(30);
  imageMode(CENTER);

}

function draw() {
  clear();
  push();
  translate(0,0,-50);
  if(windowHeight>windowWidth){
  image(table,0,0,
    windowHeight*1.2,windowHeight*1.2);
  image(logo,0,0,
    windowWidth*1.1,windowWidth*1.1);
  }else {
    image(table,0,0,
      windowWidth*1.2,windowWidth*1.2);
    image(logo,0,0,
      windowHeight,windowHeight);
  }
  pop();


  if(i>0){
    rotateX(iX);
    iX+=10;
    rotateY(iY);
    iY+=20;
    rotateZ(iZ);
    iZ+=30;
    i--;
  }else{
    rotateX(valueX);
    rotateY(valueY);
    rotateZ(valueZ);
    i=0;
  }

  translate(-50,-50,-50);


  texture(uno);
  quad(0,0,0,100,0,0,100,100,0,0,100,0);
  texture(due);
  quad(0,0,0,100,0,0,100,0,100,0,0,100);
  texture(tre);
  quad(0,0,0,0,100,0,0,100,100,0,0,100);
  texture(quattro);
  quad(100,100,0,0,100,0,0,100,100,100,100,100);
  texture(cinque);
  quad(100,100,0,100,0,0,100,0,100,100,100,100);
  texture(sei);
  quad(0,0,100,100,0,100,100,100,100,0,100,100);


}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission();
}

function deviceShaken() {
  valueX=90*Math.floor(random(-5,5));
  valueY=90*Math.floor(random(-5,5));
  valueZ=90*Math.floor(random(-5,5));
  i=30;
}

function touchMoved(){
  return false;
}
