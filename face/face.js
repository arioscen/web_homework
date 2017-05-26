function doFirst(){
	//先跟畫面產生關聯，再建事件聆聽的功能
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'steelblue';
	context.lineWidth = 5;
	
    //1
	context.arc(200,200,100,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(160,170,30,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(240,170,30,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(170,180,15,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(230,180,15,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(200,230,50,0,Math.PI,false);
	context.stroke();


    //2
	context.beginPath();
	context.arc(600,200,100,0,2*Math.PI,false);
	context.stroke();

    context.beginPath();
    context.moveTo(500,140);
    context.lineTo(580,170);
    context.stroke()

    context.beginPath();
    context.moveTo(500,210);
    context.lineTo(580,180);
    context.stroke()

    context.beginPath();
    context.moveTo(700,140);
    context.lineTo(620,170);
    context.stroke()

    context.beginPath();
    context.moveTo(700,210);
    context.lineTo(620,180);
    context.stroke()

    context.beginPath();
    context.moveTo(525,250);
	context.bezierCurveTo(575,200,625,300,675,250)
	context.stroke();

    //3
    context.beginPath();
	context.arc(600,500,100,0,2*Math.PI,false);
	context.stroke();

    context.beginPath();
	context.arc(560,470,30,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(640,470,30,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(550,460,15,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(650,460,15,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(600,530,50,0,Math.PI,false);
	context.stroke();

    context.moveTo(547,530);
    context.lineTo(653,530);
    context.stroke()

    //4
    context.beginPath();
	context.arc(200,500,100,0,2*Math.PI,false);
	context.stroke();

    context.beginPath();
	context.arc(160,470,30,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(240,470,30,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(160,455,15,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(240,485,15,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(200,580,40,0,Math.PI,true);
	context.stroke();

    context.beginPath();
	context.arc(240,510,5,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(240,525,5,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();

    context.beginPath();
	context.arc(240,545,5,0,2*Math.PI,false);
    context.fillStyle = 'steelblue';
	context.fill();
}
window.addEventListener('load',doFirst,false);
