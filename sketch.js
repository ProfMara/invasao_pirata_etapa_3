const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, cenario;
var canvas, angle, torre, solo, canhao;


function preload() {
    cenario = loadImage("background.gif");
    torreIMG = loadImage("torre.png");
}

function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    angle = 20

    solo = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
    World.add(world, solo);

    torre = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
    World.add(world, torre);

    angleMode(DEGREES);
    angle = 15;
    canhao = new Canhao(180, 110, 130, 100, angle);
    
        
    
}

function draw() {
    background(189);
    image(cenario, 0, 0, width, height);

    Engine.update(engine);

    rect(solo.position.x, solo.position.y, width * 2, 1);
    
    push();
    imageMode(CENTER);
    image(torreIMG, torre.position.x, torre.position.y, 160, 310);
    pop();

    canhao.display();

    
}

