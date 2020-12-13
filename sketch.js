var dog,happydog;
var database;
var FoodS,FoodStock;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500,500);
  dog= createSprite(250,250,10,10);
  dog.addImage(dogImage);
  FoodStock=database.ref('Food');
  FoodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(FoodS);
dog.addImage(happydogImage);
}
drawSprites();
text("Note: Press UP_ARROW Key To Feed Dargo Milk!")
  textSize(15);
  fill("white");
stroke("black")
}

function readStock(data){
FoodS=data.val();
}

function writeStock(x){
if(x<=0){
x=0;
}
else{
x=-1
}
database.ref('/').update({
  Food:x
})
}
