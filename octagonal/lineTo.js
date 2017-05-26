function doFirst(){
	//先跟畫面產生關聯，再建事件聆聽的功能
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.strokeStyle = 'black';
	context.lineWidth = 1;

	context.moveTo(119,106);
	context.lineTo(29,88);

	context.lineTo(105,139);
	context.lineTo(29,187);
	context.lineTo(118,168);
	context.lineTo(99,257);
	context.lineTo(149,182);
	context.lineTo(199,256);
	context.lineTo(179,170);
	context.lineTo(267,188);
	context.lineTo(192,138);
	context.lineTo(268,88);
	context.lineTo(179,108);
	context.lineTo(197,20);
	context.lineTo(149,95);
	context.lineTo(94,18);
	context.lineTo(119,106);
	context.stroke();
};
window.addEventListener('load',doFirst,false);
