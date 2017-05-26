function doFirst(){
	
//	barsize = 540;
	
	//先跟畫面產生關聯
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');

	stopButton = document.getElementById('stopButton');
	upButton = document.getElementById('upButton');
	downButton = document.getElementById('downButton');
	muteButton = document.getElementById('muteButton');

	volumex = document.getElementById('volumex');
	volumex.innerText = "音量"+Math.floor(myMovie.volume*100)+"%";

	playtime = document.getElementById('playtime');
	playtime.innerText = formatSecond(myMovie.currentTime)+"/"+formatSecond(myMovie.duration);
	
//==========
//	barsize = window.getComputedStyle(defaultBar).width;
	barsize = parseInt(window.getComputedStyle(defaultBar).width);
//	alert(barsize);
//==========
	
	//再建事件聆聽的功能
	playButton.addEventListener('click',playvideo,false); 
	myMovie.addEventListener('click',playvideo,false);  
	defaultBar.addEventListener('click',clickedBar,false); 

	stopButton.addEventListener('click',stopvideo,false);
	muteButton.addEventListener('click',muteonoff,false);
	upButton.addEventListener('click',volumeup,false);
	downButton.addEventListener('click',volumedown,false);
}
function playvideo(){
	if(myMovie.paused){
		myMovie.play();
		setInterval(update,400);
	}
}
function stopvideo(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
	}
}
function update(){
	if(!myMovie.ended){
		var size = barsize / myMovie.duration * myMovie.currentTime;
		progressBar.style.width = size + 'px';
		playtime.innerText = formatSecond(myMovie.currentTime)+"/"+formatSecond(myMovie.duration);
	}else{
		progressBar.style.width = '0px';
		playButton.innerText = 'Play';
	}
}
function clickedBar(e){
	var mouseX = e.pageX - defaultBar.offsetLeft;
	var newTime = mouseX / (barsize / myMovie.duration);

	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX + 'px';
}
function muteonoff(){
	if (myMovie.muted == false) {    
       myMovie.muted = true;
	   muteButton.innerText = 'UNMUTE'
	}else{
		myMovie.muted = false;
		muteButton.innerText = '\xa0'+'MUTE'+'\xa0'
	}
}
function volumeup(){
	myMovie.volume += 0.1;
	if (myMovie.volume != 1){
		volumex.innerText = "音量"+'\xa0\xa0'+Math.floor(myMovie.volume*100)+"%";
	}else{
		volumex.innerText = "音量"+Math.floor(myMovie.volume*100)+"%";
	}	
}
function volumedown(){
	myMovie.volume -= 0.1;
	if (myMovie.volume != 1){
		volumex.innerText = "音量"+'\xa0\xa0'+Math.floor(myMovie.volume*100)+"%";
	}else{
		volumex.innerText = "音量"+Math.floor(myMovie.volume*100)+"%";
	}	
}
function formatSecond(secs) {          
	var hr = Math.floor(secs / 3600);
	var min = Math.floor((secs - (hr * 3600)) / 60);
	var sec = parseInt( secs - (hr * 3600) - (min * 60));

	while (min.length < 2) { min = '0' + min; }
	while (sec.length < 2) { sec = '0' + min; }
	if (hr) hr += ':';
	return hr + min + ':' + sec;

}
window.addEventListener('load',doFirst,false);