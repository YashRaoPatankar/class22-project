var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	//fairy.debug = true;
	fairy.setCollider("circle",0,0,500);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy.velocityY = 0;
	fairy.velocityX = 0;

}


function draw() {
  background(bgImg);

   
  keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here

	if (keyDown("right")){

		fairy.velocityX = +4;
		fairyVoice.play();	

	}

	if(keyDown("left")){

		fairy.velocityX = -4;

	}

	if(keyDown("down")){

		star.velocityY = 3;

	}

	if(fairy.isTouching(star)){

		fairy.velocityY = 0;
		fairy.velocityX = 0;
		star.velocityY = 0;
		fairyVoice.stop();

	}

}
