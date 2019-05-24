
var cvs=document.getElementById("snake1");
var ctx=cvs.getContext("2d");
var box=20;
let score = 0;
var len=4;
var snake=[];
let game;
for(var i=len-1;i>=0;i--)
{
	snake.push(
	{
		x:i,
		y:0
	});
}

var direction="right";
document.addEventListener("keydown",getdirection);
function getdirection(e)
{
	if(e.keyCode == 37 && direction != "right")
	{
      direction = "left";
	}
	else if(e.keyCode == 38 && direction != "down")
	{
		direction = "up";
	}
	else if(e.keyCode == 39 && direction != "left")
	{
		direction = "right";
	}
	else if(e.keyCode == 40 && direction != "up")
	{
		direction = "down";
	}
}
function drawSnake(x,y)
{
	if(y<0)
		{
			ctx.fillStyle="black";
          ctx.fillRect(x*box,y*box+60,box,box);
			}
			else{


ctx.fillStyle="green";
ctx.fillRect(x*box,y*box+60,box,box);
ctx.strokeStyle="red";
ctx.strokeRect(x*box,y*box+60,box,box);
}
}

function hea(score)
{
ctx.fillStyle="red";
ctx.strokeStyle="yellow";
ctx.fillRect(1*box,1*box,box,box);
ctx.strokeRect(1*box,1*box,box,box);
ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,3*box,2*box);
}
 let food=
      {
      	x:Math.floor(Math.random()*24+1),
      	y:Math.floor(Math.random()*24+1)
      }
       function drawfood(x,y)
 {
 	ctx.fillStyle="red";
ctx.fillRect(x*box,y*box+60,box,box);
ctx.strokeStyle="yellow";
ctx.strokeRect(x*box,y*box+60,box,box);
 }
 function col(x,y,array)
 {
   for(var i=0;i<array.length;i++)
   {
   	if(x == array[i].x && y == array[i].y)
   	{
   		return true;
   	}
   }
   return false;
 }
function drawback()
{
	for(var i=0;i<25;i++)
	{
		for(var j=0;j<25;j++)
		{
			if((i+j)%2==0)
			{   
				ctx.fillStyle="white";
				ctx.fillRect(j*box,i*box+60,box,box);
			}
			else
				{   
				ctx.fillStyle="grey";
				ctx.fillRect(j*box,i*box+60,box,box);
			}
		}
	}
}
function draw()
{
	ctx.clearRect(0,0,snake1.width,snake1.height);
	drawback();
	for(var i=0;i<snake.length;i++)
	{
		drawSnake(snake[i].x,snake[i].y);
	}
	drawfood(food.x,food.y);
	var snakex=snake[0].x;
	var snakey=snake[0].y;
    


	
	if(direction == "left") snakex--;
	else if(direction == "up") snakey--;
	else if(direction == "right") snakex++;
	else if(direction == "down") snakey++;
	if(snakex<-1 || snakey<-1 || snakex>=26 || snakey>=26 || col( snakex,snakey,snake))
    {
        alert("GAME OVER");
    	clearInterval(game);
    	

    }
	if(snakex==food.x && snakey==food.y){
		score++;
		food={
      
      	x:Math.floor(Math.random()*24+1),
      	y:Math.floor(Math.random()*24+1)
      }
       var newhead={
		x:snakex,
		y:snakey

		};
	}
	else{



    snake.pop();
    

	var newhead={
		x:snakex,
		y:snakey

		};
	}
		snake.unshift(newhead);
		hea(score);


}
 function speed1(x){
 game=setInterval(draw,x);
}

