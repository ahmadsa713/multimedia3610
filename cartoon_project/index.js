var view = document.getElementById("view");
var context = view.getContext("2d");
var linkText="http://stackoverflow.com";
context.fillText(linkText,50,50);
context.beginPath();
context.fillStyle = 'rgba(0, 0, 0, 0.4)';
context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
context.save();
//cloud creation
context.beginPath();
context.moveTo(170, 80);
var startX=170;
var startY=80;


var startX = 200;
var startY = 10;

// draw cloud shape
context.beginPath();
context.moveTo(startX, startY);
context.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX + 220, startY + 20);
context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
context.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);

context.fillStyle="#72c4f5";
context.fill();
 




// context.bezierCurveTo(startX-5,startY+5, startX-5, startY+10, startX+5, startY+10);
// context.bezierCurveTo(startX+10, startY+20, startX+20, 180, 340, 150);
// context.bezierCurveTo(420, 150, 420, 120, 390, 100);
// context.bezierCurveTo(430, 40, 370, 30, 340, 50);
// context.bezierCurveTo(320, 5, 250, 20, 250, 50);
// context.bezierCurveTo(200, 5, 150, 20, 170, 80);
// context.bezierCurveTo(130, 100, 130, 110, 150, 120);
// context.bezierCurveTo(250, 180, 320, 180, 340, 150);
// context.bezierCurveTo(420, 150, 420, 120, 390, 100);
// context.bezierCurveTo(430, 40, 370, 30, 340, 50);
// context.bezierCurveTo(320, 5, 250, 20, 250, 50);
// context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.closePath();
context.lineWidth = 3;
context.fillStyle=""
context.strokeStyle = '#0000ff';
context.stroke();
context.closePath();


context.beginPath();
context.arc(800,50,40,0,2*Math.PI);
context.fillStyle = "orange";
context.fill();
context.strokeStyle="black";
context.stroke();
context.beginPath();
context.moveTo(0,150);
context.lineTo(150,50);
context.lineTo(310,210);



context.moveTo(250,320);
context.lineTo(400,50);
context.lineTo(485,159);




context.moveTo(380,360);
context.lineTo(550,50);
context.lineTo(700,310);
context.moveTo(650,220);
context.lineTo(850,130);
context.lineTo(913,215);

context.moveTo(820,340);
context.lineTo(1000,100);
context.closePath();
context.stroke();


context.beginPath();


var start_pnt_X = 0; 
var start_pnt_Y =150; 
var cntrl_pnt_1_X = 150; 
var cntrl_pnt_1_Y = 180;
var cntrl_pnt_2_X = 300; 
var cntrl_pnt_2_Y = 450; 
var end_pnt_X     = 400; 
var end_pnt_Y     = 350;


context.moveTo(start_pnt_X, start_pnt_Y);  
context.bezierCurveTo(cntrl_pnt_1_X, cntrl_pnt_1_Y, cntrl_pnt_2_X, cntrl_pnt_2_Y, end_pnt_X, end_pnt_Y); 
context.moveTo(end_pnt_X,end_pnt_Y);
context.bezierCurveTo(600, 200, 900, 420, 1000, 350); 
context.strokeStyle="green";
context.stroke();



// context.moveTo(start_pnt_X, start_pnt_Y+100); 
// context.bezierCurveTo(cntrl_pnt_1_X, cntrl_pnt_1_Y+100, cntrl_pnt_2_X, cntrl_pnt_2_Y+100, end_pnt_X, end_pnt_Y+100); 
// context.moveTo(end_pnt_X,end_pnt_Y+100);
// context.bezierCurveTo(600, 300, 900, 520, 1000, 450); 
// context.fillStyle="blue";
// context.fill();
// context.stroke();

context.beginPath();

context.moveTo(0,870);
context.lineTo(1000,870);
context.lineTo(1000,1000);
context.lineTo(0,1000);
context.lineTo(0,870);

context.fillStyle="#729dfc";
context.fill();
context.strokeStyle="blue";
context.stroke();

context.moveTo(20,500);

//Drawing Home
context.fillStyle="#A2322E";
context.fillRect(20,600,180,120);
context.strokeStyle="black";
context.stroke();

//Triangle part of the Home
context.fillStyle="black";
context.beginPath();
context.moveTo(20,600);
context.lineTo(110,570);
context.lineTo(200,600);
context.closePath();
context.fill();

//door for home object
context.fillStyle = "black";
context.fillRect(90,630,30,90);
// context.fillText(linkText,5,900);


//knob for the door
context.beginPath();
context.fillStyle = "#F2F2F2";
context.arc(115,670,3,0,2*Math.PI);
context.fill();
context.strokeStyle="red";
context.stroke();
context.closePath();

//adding fencing with for loop
for (let i=0;i<20;i++)
{ 
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(5+i*14,750);
    context.lineTo(5+i*14,800);
    context.strokeStyle="black";
    context.stroke();
}
context.moveTo(5,770);
context.lineTo(280,770);
context.stroke();
//for loop for side fencing 
for(let i=0;i<12;i++)
{
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(300,800-i*22);
    context.lineTo(285,760-i*22);
    context.strokeStyle="black";
    context.stroke();
}
context.moveTo(295,530);
context.lineTo(293,750);
context.stroke();