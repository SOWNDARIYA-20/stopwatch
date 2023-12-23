let hours =0;
let minutes =0;
let seconds =0;
let miliseconds =0;
let interval;

const hourscontainer = document.getElementById("hours");
const minutescontainer = document.getElementById("minutes");
const secondscontainer = document.getElementById("seconds");
const milisecondscontainer = document.getElementById("miliseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const startTimer = () =>{
	clearInterval(interval);
	interval = setInterval(startwatch,10);
}

const stopTimer = ()=>{
	clearInterval(interval);
}

const resetTimer = ()=>{
	miliseconds=0;
	seconds=0;
	minutes=0;
	hours=0;

	milisecondscontainer.innerHTML =0;
	secondscontainer.innerHTML =0;
	minutescontainer.innerHTML =0;
	hourscontainer.innerHTML = 0 ;
    clearInterval(interval);
}

function startwatch(){
	miliseconds++;
	if(miliseconds<10){
		milisecondscontainer.innerHTML=`0${miliseconds}`;
	}
	else if(miliseconds<999){
		miliseconds=0;
		milisecondscontainer.innerHTML="00";
		seconds++;
	}
	else{
		milisecondscontainer.innerHTML=miliseconds;
	}


	if(seconds<10){
		secondscontainer.innerHTML=`0${seconds}`;
	}
	else if(seconds<59){
		minutes++;
		seconds=0;
		secondscontainer.innerHTML="00";
	}
	else{
		secondscontainer.innerHTML=seconds;
	}


	if(minutes<10){
		minutescontainer.innerHTML=`0${minutes}`;
	}
	else if(minutes >59){
		hours++;
		minutes=0;
		minutescontainer.innerHTML=minutes;
	}
	else{
		minutescontainer.innerHTML=minutes;
	}

	if(hours<10){
		hourscontainer.innerHTML=`0${hours}`;
	}
	else{
		hourscontainer.innerHTML=hours;
	}
}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);

