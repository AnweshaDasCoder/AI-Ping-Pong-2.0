function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
 instializeInSetup(ping);
 canvas.parent('canvas');
}


