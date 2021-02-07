var canvas;
var music;
var box1, box2, box3, box4, box5;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(75,580,185,20);
    box1.shapeColor = "blue";

    box2 = createSprite(295,580,185,20);
    box2.shapeColor = "yellow";

    box3 = createSprite(515,580,185,20);
    box3.shapeColor = "red";

    box4 = createSprite(725,580,185,20);
    box4.shapeColor = "green";

    box5 = createSprite(400,300,40,40);
    box5.shapeColor = "white";
    box5.velocityX = 3;
    box5.velocityY = 4;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    Edges = createEdgeSprites();
    box5.bounceOff(Edges);

    if(box5.isTouching(box1)){
        box5.shapeColor = "blue";
        box5.bounceOff(box1);
    }
    if(box5.isTouching(box2)){
        box5.shapeColor = "yellow";
        box5.velocity = 0;
    }
    if(box5.isTouching(box3)){
        box5.shapeColor = "red";
        box5.bounceOff(box3);
        music.play();
    }
    if(box5.isTouching(box4)){
        box5.shapeColor = "green";
        box5.bounceOff(box4);
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
