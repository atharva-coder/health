var gameState=0;

var welcomeImg;
var next,nextImg;

function preload(){
  welcomeImg = loadImage("images/welcome.jpeg");
  nextImg = loadImage("images/next.png");
  neckpainImg = loadImage("images/neckpain.jpeg");
  waistPainImg = loadImage("images/waist.jpeg");
  eyepainImg = loadImage("images/eyepain.jpeg");
  legpainImg = loadImage("images/legpain.jpeg");
  doctorImg = loadImage("images/doctor.jpeg");
  backbutton1Img = loadImage("images/backbutton.png");
  hospitalImg = loadImage("images/hospitals.jpeg");
  preventionImg= loadImage("images/prevention.jpeg");
  hospital2Img = loadImage("images/hospital2.jpeg");
  hospital3Img = loadImage("images/hospital3.jpeg");
  pImg = loadImage("images/p.png");


  
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  
  welcome = createSprite(windowWidth/2,windowHeight/2+250);
  welcome.addImage(welcomeImg);
  welcome.scale = 1.2;
  welcome.visible = false;
  next = createSprite(windowWidth/4,windowHeight/5);
  next.addImage(nextImg);
  next.scale = 0.5;
  next.visible = false;
  
  neckpain = createSprite(windowWidth/7,windowHeight/2+100);
  neckpain.addImage(neckpainImg);
  neckpain.visible = false;
  waistpain = createSprite(windowWidth/3+50,windowHeight/3);
  waistpain.addImage(waistPainImg);
  waistpain.visible = false;
  eyepain = createSprite(windowWidth/3+350,windowHeight/3);
  eyepain.addImage(eyepainImg);
  eyepain.visible = false;
  legpain = createSprite(windowWidth/3+640,windowHeight/3);
  legpain.addImage(legpainImg);
  legpain.visible = false;
  doctor = createSprite(windowWidth/4+200,windowHeight/4+200);
  doctor.addImage(doctorImg);
  doctor.visible = false;
  hospital = createSprite(windowWidth/4+700,windowHeight/4+200);
  hospital.addImage(hospitalImg);
  hospital.visible = false;
  
  backbutton1 = createSprite(windowWidth/8,windowHeight/9);
  backbutton1.addImage(backbutton1Img);
  backbutton1.visible = false;
  
  prevention  = createSprite(windowWidth/5,windowHeight/3+300);
  prevention.addImage(preventionImg);
  prevention.visible = false;
  hospital2  = createSprite(windowWidth/5+370,windowHeight/3+300);
  hospital2.addImage(hospital2Img);
  hospital2.visible = false;
  hospital3 = createSprite(windowWidth/5+600,windowHeight/3+330);
  hospital3.addImage(hospital3Img);
  hospital3.visible = false;
  p = createSprite(windowWidth/5+300,windowHeight/3+230);
 p.addImage(pImg);
  p.visible = false;
  
}
function draw(){
 // background("white");

  pg1();

 if(mousePressedOver(next)){
   gameState = 1;
 }
 
 if(touches.length<0){
   gameState =1
   touches=[];
 }
 if(gameState === 1){
  
pg2();
 }
 if(mousePressedOver(neckpain)|| touches.length>0){
   gameState=3;
 
}
if(gameState === 3){
  neck();
}
if(mousePressedOver(doctor)|| touches.length>0){
  gameState=4
  touches=[];
}
if(gameState === 4){
  doctorName();
}
if(mousePressedOver(backbutton1)||touches.length>0){
  gameState = 5;
  touches=[];
}
if(gameState===5){
pg1();
}
if(mousePressedOver(hospital)||touches.length>0){
  gameState = 6;
  touches=[];
}
if(gameState === 6){
  neckhospital();
}
if(mousePressedOver(eyepain)||touches.length>0){
  gameState = 7;
  touches=[];
}
if(gameState === 7){
  eye();
}
if(mousePressedOver(prevention)||touches.length>0){
  gameState = 8;
  touches=[];
}

if(gameState === 8){
  measures();
}
if(mousePressedOver(hospital2)||touches.length>0){
  gameState = 9;
  touches=[];
}
if(gameState === 9){
  eyeHospital();
}
if(mousePressedOver(waistpain)||touches.length>0){
  gameState = 10;
  touches=[];
}
if(gameState === 10){
waist();
}
if(mousePressedOver(p)||touches.length>0){
  gameState = 11;
  touches=[];
}
if(gameState === 11){
  waistmeasures();
}
if(mousePressedOver(hospital3)||touches.length>0){
  gameState = 12;
  touches=[];
}
if(gameState===12){
  waistHospital();
}
  
  drawSprites();
  
}
function pg1(){
  background("white");
welcome.visible = true;
next.visible = true;
waistpain.visible = false;
legpain.visible= false;
eyepain.visible = false;
neckpain.visible = false;
doctor.visible = false;
backbutton1.visible = false;
hospital.visible = false;
  

textSize(60);
stroke(0);
fill(12,17,90);
text("Guys this is just my apps prototype.",windowWidth/7,windowHeight/2);
text("so if there are some mistakes please forgive me!",windowWidth/19,windowHeight/2+100)

 // next.visible = true;
drawSprites();
}
function pg2(){
  clear();
  background("green");
  welcome.visible = false;
  next.visible = false;
  hospital.visible = false;
  backbutton1.visible = true;
  hospital3.visible = false;
  p.visible = false;
  console.log("gameState=1",gameState);

  textSize(50);
  fill("white");
  text("which Problem are You Facing From?",windowWidth/5,windowHeight/6);
   neckpain.visible = true;
   textSize(30);
   fill("yellow");
   text("NeckPain",windowWidth/10,windowHeight/2);
   waistpain.visible = true;
   textSize(30);
   fill("yellow");
   text("WaistPain",windowWidth/4+70,windowHeight/2+20);
   eyepain.visible = true;
   textSize(30);
   fill("yellow");
   text("EyePain",windowWidth/4+380,windowHeight/2+20);
   legpain.visible = true;
   textSize(30);
   fill("yellow");
   text("LegPain",windowWidth/4+670,windowHeight/2+20);

textSize(20);
fill("red");

   text("Guys You will not be able to see the info of LEGPAIN coz its just a prototype.i have given the info for rest 3",windowWidth/10,windowHeight/2+300);
   fill("yellow");
   text("In my application You will able to see the information based on the pains of body",windowWidth/7,windowHeight/3+330);
  
   text("means why we have that pain, the preventative measures for the pain and many more.!",windowWidth/7,windowHeight/3+360);
  drawSprites();
}
function neck(){
  
  background("white");
  legpain.visible = false;
  eyepain.visible = false;
  waistpain.visible = false;
  welcome.visible = false;
  next.visible = false;
  neckpain.visible = false;
  backbutton1.visible= true;
  textSize(50);
  fill("blue");
  text("Neck-Pain",windowWidth/2,windowHeight/5)
  textSize(25);
  fill("red");
  text("Guys to view the specialist doctors",windowWidth/4+70,windowHeight/4+70) ;
  text("in india press the below image",windowWidth/4+70,windowHeight/4+90);
  textSize(25);
  fill("black");
  text("Guys The neck problem usually occurs in any age, especially in adults",windowWidth/4,windowHeight/4);
  textSize(20);
  text("The neck pain is a common complaint of students,adults,teenagers,olds etc. Neck muscles can be strained", windowWidth/4+50,windowHeight/4+20)
  text("from poor posture.",windowWidth/4+50,windowHeight/4+40);
  doctor.visible = true;
  hospital.visible = true;
  textSize(20);
  fill("red");
  text("Guys to view the specialist hospitals",windowWidth/2+180,windowHeight/4+70);
  text("in india press the below image",windowWidth/2+180,windowHeight/4+90);
  

}
function doctorName(){
  
  
  background(15,119,126);
  neckpain.visible = false;
  doctor.visible= false;
  welcome.visible = false;
  next.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  textSize(50);
  fill("white");
  stroke("black")
  text("1.Dr.SM Tuli.", windowWidth/7,windowHeight/4+40);
  text("2.DR.Satish V Modi.", windowWidth/7,windowHeight/4+100);
  text("3.Dr.Dilip Tanna", windowWidth/7,windowHeight/4+160);
  text("4.Dr. Dilip Nagpal", windowWidth/7,windowHeight/4+220);
  text("5.jogindar moncha", windowWidth/7,windowHeight/4+280);
  textSize(60);
  fill("white");
  stroke("yellow");
  text("Some of the Specialist doctors",windowWidth/5,windowHeight/5);


}
function neckhospital(){
  neckpain.visible = false;
  doctor.visible= false;
  welcome.visible = false;
  next.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  background(20,110,125)
  textSize(50);
  fill("white");
  stroke("yellow");
  text("Some of the Hospitals",windowWidth/5,windowHeight/5);
  textSize(30);
  fill("white");
  stroke("black");
  text("1.Dr Satyen Mehta Spine Clinic-mumbai",windowWidth/7,windowHeight/3);
  text("ph no.020 7118 5945",windowWidth/7,windowHeight/3+35);
  text("2.DR. KAMAL GOYAL ENT & ENDOSCOPIC EAR SURGEON CLINIC-delhi",windowWidth/7,windowHeight/3+100);
  text("ph no.011 4119 4322",windowWidth/7,windowHeight/3+135);
  text("3.Vitality's Laser Piles Clinic-hyderabad",windowWidth/7,windowHeight/3+200);
  text("ph no.091085 03674",windowWidth/7,windowHeight/3+235);
    

}

function eye(){
  background("white");
  welcome.visible = false;
next.visible = false;
waistpain.visible = false;
legpain.visible= false;
eyepain.visible = false;
neckpain.visible = false;
doctor.visible = false;
backbutton1.visible = false;
hospital.visible = false;
prevention.visible = true;
hospital2.visible = true;
textSize(60);
stroke("blue");
fill(12,123,67);
text("Eye pain",windowWidth/2,windowHeight/5);
textSize(30);
fill(0);
text("Eye pains due the rays/light coming from the mobiles,computers,pcs etc.",windowWidth/5,windowHeight/3);
textSize(20);
fill("red");
text("Guys to view the preventive measures ",windowWidth/7,windowHeight/3+50);
text("which can be done at home. press the below image.",windowWidth/7,windowHeight/3+70);
text("Guys to view the Hospitals ",windowWidth/3,windowHeight/3+180);
text(" press the below image.",windowWidth/3,windowHeight/3+200);

}
function measures(){

  welcome.visible = false;
  next.visible = false;
  waistpain.visible = false;
  legpain.visible= false;
  eyepain.visible = false;
  neckpain.visible = false;
  doctor.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  prevention.visible = false;
  hospital2.visible = false;

background("white");
textSize(30);
fill("black");
stroke("red");
text("1.Adjust the lighting. When watching television, it may be easier on your eyes ",windowWidth/7,windowHeight/3+50);
text("if you keep the room softly lit.",windowWidth/7,windowHeight/3+80)
text("2.take the break of minimum 10 min in between",windowWidth/7,windowHeight/3+150)



}
function eyeHospital(){
  welcome.visible = false;
  next.visible = false;
  waistpain.visible = false;
  legpain.visible= false;
  eyepain.visible = false;
  neckpain.visible = false;
  doctor.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  prevention.visible = false;
  hospital2.visible = false;

  background(119,4,147);

  textSize(50);
  stroke("red");
  fill("yellow");
  text("Some of the hospitals for eye pain",windowWidth/7,windowHeight/4);

textSize(30);
  stroke("red");
  fill("black");
  text("1.Mumbai Eye Care-Hospital",windowWidth/7,windowHeight/4+100);
  text("2.Sun Eye Hospital & Lasik Laser Center - lucknow",windowWidth/7,windowHeight/4+150);
  textSize(20);
  text("This is a prototype of this app so to be continued",windowWidth/7,windowHeight/4+200);


}
function waist(){
  welcome.visible = false;
  next.visible = false;
  waistpain.visible = false;
  legpain.visible= false;
  eyepain.visible = false;
  neckpain.visible = false;
  doctor.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  prevention.visible = false;
  hospital2.visible = false;
  hospital3.visible = true;
  p.visible = true;

background(15,130,65);

textSize(50);
stroke(0);
fill("blue");
text("Waist pain", windowWidth/7,windowHeight/3-20);
textSize(30);
stroke(0);
fill("yellow");
text("Guys the waist pain occurs due to sitting on 1 place for longer time.",windowWidth/7,windowHeight/3+50);
text("it happens to students, workers on the large scale.",windowWidth/7,windowHeight/3+80);
textSize(20);
fill("yellow");
text("Guys to view the hospitals on waist pain",windowWidth/5+500,windowHeight/3+200);
text("click on the below image",windowWidth/5+500,windowHeight/3+220);
text("Guys to view the preventative measures on waist pain",windowWidth/5,windowHeight/3+100);
text("click on the below image",windowWidth/5+200,windowHeight/3+120);

}
function waistmeasures(){
  welcome.visible = false;
  next.visible = false;
  waistpain.visible = false;
  legpain.visible= false;
  eyepain.visible = false;
  neckpain.visible = false;
  doctor.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  prevention.visible = false;
  hospital2.visible = false;
  hospital3.visible = false;
  p.visible = false;

  background(120,80,45);

textSize(60);
stroke(0);
fill(130,8,10);
text("Preventative measures for waist pain",  windowWidth/7,  windowHeight/3-2);
textSize(30);
stroke(0);
fill("yellow");
text("1.Don't sit on one place for a long time",  windowWidth/7,  windowHeight/3+50);
text("2.Do back-strengthening and stretching exercises at least 2 days a week",  windowWidth/7,  windowHeight/3+100);
text("3.Stand and sit up straight.",  windowWidth/7,  windowHeight/3+150);
text("4.Get active and eat healthy. Being overweight can strain your back..",  windowWidth/7,  windowHeight/3+200);




}
  function waistHospital(){
    welcome.visible = false;
    next.visible = false;
    waistpain.visible = false;
    legpain.visible= false;
    eyepain.visible = false;
    neckpain.visible = false;
    doctor.visible = false;
    backbutton1.visible = true;
    hospital.visible = false;
    prevention.visible = false;
    hospital2.visible = false;
    hospital3.visible = false;
    p.visible = false;

    background(122,18,90);
    textSize(60);
    fill("white");
    text("Some of the Hospitals for waist pain",windowWidth/7,windowHeight/2);
    textSize(40);
    text("1.QI Spine Clinic-mumbai ",windowWidth/7,windowHeight/2+100);
    text("2.Dr Pramod Saini Spine Surgeon-noida.UP ",windowWidth/7,windowHeight/2+170);

  }
