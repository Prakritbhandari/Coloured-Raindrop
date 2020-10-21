var raindrops = [];
var raindrops = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);

  if(frameCount % 1 === 0){
    var raindrop = new Raindrop(random(0, windowWidth), -50, 3, random(20, 50));
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(20);
    raindrops[i].display();
  }
}
