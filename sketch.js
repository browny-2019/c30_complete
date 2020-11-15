const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
   world = engine.world;
  base1 = new Base(600,150,200,10);
  base2 = new Base(400,350,200,10);
  ground = new Base(600,390,1200,20);

  block1 = new Block(520,140,30,30);
  block2 = new Block(550,140,30,30);
  block3 = new Block(580,140,30,30);
  block4 = new Block(610,140,30,30);
  block5 = new Block(640,140,30,30);
  block6 = new Block(670,140,30,30);
  block7 = new Block(320,340,30,30);
  block8 = new Block(350,340,30,30);
  block9 = new Block(380,340,30,30);
  block10 = new Block(410,340,30,30);
  block11 = new Block(440,340,30,30);
  block12 = new Block(470,340,30,30);
  block13 = new Block(550,110,30,30);
  block14 = new Block(580,110,30,30);
  block15 = new Block(610,110,30,30);
  block16 = new Block(350,310,30,30);
  block17 = new Block(380,310,30,30);
  block18 = new Block(410,310,30,30);
  block19 = new Block(440,310,30,30);
  block20 = new Block(640,110,30,30);
  block21 = new Block(380,280,30,30);
  block22 = new Block(410,280,30,30);
  block23 = new Block(580,80,30,30);
  block24 = new Block(610,80,30,30);


  ball = new Ball(160,255,20);

  sling = new SlingShot(ball.body,{x:160,y:255});
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 
    text(mouseX+ ', '+ mouseY, mouseX, mouseY);
  base1.display();
  base2.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  ball.display();

  sling.display();


  
}
function mouseDragged(){
  
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball.body,{x:160,y:255});
     sling.attach(ball.body);
  }
}
