var rood = 255;
var blauw = 0;
var vincent = "hallo";



function setup() {
  // put setup code here

  createCanvas(400,400); 
  background(0,255,150);
  //console.log(vincent);
}

function draw() {
  // put drawing code here
 background(0,400-mouseX,0);
  blauw = random(0,255);
  //background(rood,0,blauw,;
  rood = random(0,255);
  fill(10,50,12);
  ellipse(200,200,mouseX,mouseY);

  noStroke();
  fill(10,255,12);
  rect(100,150,200,100);

  fill(100,0,50); 
  ellipse(200,200,200,100);

  stroke(255);
  line(0,200,400,200);
  line(200,0,200,400);

 
}
