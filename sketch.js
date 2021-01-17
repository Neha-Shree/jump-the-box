var canvas;
var music;
var box;
var board1 , board2 , board3 , board4 ;
var edge1 , edge2 , edge3 , edge4 ;

function preload(){

    music = loadSound("music.mp3");
}

function setup(){

    music.play();

    canvas = createCanvas(800,600);

    box = createSprite(random(20,750),200,40,40);
    box.shapeColor = "white"
    box.velocityX = 4;
    box.velocityY = 6;

    board1 = createSprite(100,585,200,30);
    board1.shapeColor = "red";
    board2 = createSprite(299,585,200,30);
    board2.shapeColor = "green";
    board3 = createSprite(499,585,200,30);
    board3.shapeColor = "yellow";
    board4 = createSprite(699,585,200,30);
    board4.shapeColor = "violet";

    edge1 = createSprite(10,300,20,600);
    edge1.visible = false ;
    edge2 = createSprite(790,300,20,600);
    edge2.visible = false ; 
    edge3 = createSprite(400,10,800,20);
    edge3.visible = false ;
    edge4 = createSprite(400,10,800,20);
    edge4.visible = false ;

}

function draw() {

    background("black");

    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);

if(box.isTouching(board1) && box.bounceOff(board1)){
    music.stop();
    box.shapeColor = "red";
    box.bounceOff(board1);
}

else if(box.isTouching(board2) && box.bounceOff(board2)){
    music.stop();
    box.shapeColor = "green";
    box.bounceOff(board2);
    music.play();
}

else if(box.isTouching(board3) && box.bounceOff(board3)){
    music.stop();
    box.shapeColor = "yellow";
    box.bounceOff(board3);
    music.play();
}

else if(box.isTouching(board4) && box.bounceOff(board4)){
    music.stop();
    box.shapeColor = "violet";
    box.bounceOff(board4);
    music.play();
}
    
drawSprites();
}
