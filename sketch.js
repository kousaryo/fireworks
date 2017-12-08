var fireworks = [];
var gravity;
var mic;
var particle = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
    mic.start();
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(5);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0,0,0,25);
    var vol = mic.getLevel();
    if (vol > 0.1) {
        fireworks.push(new Firework());
    }
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
    if(fireworks.length > 0){
       console.log(particle.done);
}
}
