
var trex ,trex_running;
function preload(){
  //load Animation
  trex_running = loadAnimation("trex1.png",)

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(200,200,80,80);



}

function draw(){
  background("white")
  drawSprites();

}
