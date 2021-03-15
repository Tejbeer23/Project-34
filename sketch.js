var dog , happyDog;
var foodS , foodStock;
var database;

function preload()
{
	dog = loadImage("images/doglmg.png");
  happyDog = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    }

   


  drawSprites();
  //add styles here

textSize(150);
fill("Red");
stroke();
text(foodStock)
}

function readStock(data){
  foodS=data,val();
  foodStock = foodStock-1;
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
  database.ref('/').update({
    Food:x
  })
}
