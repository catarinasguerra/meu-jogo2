var cestaImg, fundoImg, lanranjaImg, melanciaImg, morangoImg, pessegoImg, peraImg; 
var cesta, fundo, lanranja, melancia, morango, pessego, pera;

function preload(){
    cestaImg =loadImage("cestinha.png")
    fundoImg= loadImage("fundo.png")
   lanranjaImg= loadImage("lanranja.png")
   melanciaImg= loadImage("melancia.png")
   morangoImg= loadImage("morango.jpg")
   pessegoImg= loadImage("pessego.png")
   peraImg= loadImage("pera.png")
   


}

function setup(){
    createCanvas(1200,1200);
    cesta= createSprite(300,1000,10,10);
    cesta.addImage(cestaImg)
    cesta.scale = 0.2
    fundo= createSprite(10,10,10,10)


}

function draw(){
    background(fundoImg);
    cesta.x= World.mouseX
    lanranjaa();
    melanciaa();
    morangoo();
    pessegoo();
    peraa();
    drawSprites();
}
function lanranjaa(){
    lanranja=createSprite(random(0,1000),10,10,10);
    lanranja.addImage(lanranjaImg);
    lanranja.scale= 0.05;
    lanranja.velocityY= 3;
    lanranja.lifetime=300;

}
function melanciaa(){
    melancia=createSprite(random(0,1000),10,10,10);
    melancia.addImage(melanciaImg);
    melancia.scale= 0.05;
    melancia.velocityY= 3;
    melancia.lifetime=300;

}
function morangoo(){
    morango=createSprite(random(0,1000),10,10,10);
    morango.addImage(morangoImg);
    morango.scale= 0.05;
    morango.velocityY= 3;
    morango.lifetime=300;

}
function pessegoo(){
    pessego=createSprite(random(0,1000),10,10,10);
    pessego.addImage(pessegoImg);
    pessego.scale= 0.05;
    pessego.velocityY= 3;
    pessego.lifetime=300;

}
function peraa(){
    pera=createSprite(random(0,1000),10,10,10);
    pera.addImage(peraImg);
    pera.scale= 0.05;
    pera.velocityY= 3;
    pera.lifetime=300;

}