 var canvas = document.getElementById('myCanvas');

var Circle = function(x, y, radius, color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	
	this.draw = function(){
		var context = canvas.getContext('2d');
      var centerX = this.x;
      var centerY = this.y;
      var radius = this.radius;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.color;
      context.fill();
      context.lineWidth = 0;
      context.strokeStyle = '#003300';
      context.stroke(); 
	};
}

var circle1 = new Circle(150, 150, 100, 'red');
circle1.draw();
var circle2 = new Circle(300, 400 , 150, 'pink');
circle2.draw();
var circle3 = new Circle(500, 100,  50, 'green');
circle3.draw();

document.onkeydown = moveCircle();
	
var moveCircle = function(e){
		e = e || window.event;
	
	if (e.keyCode === '38'){
		//up
		circle1.y += 10
	} else if (e.keyCode === '40'){
		//down
		circle1.y -= 10
	} else if (e.keyCode === '39'){
		//left
		circle1.x -= 10
	} else if (e.keyCode === '37'){
		//right
		cirle1.x += 10
	}
	
}


	
