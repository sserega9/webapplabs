
let btn_start = document.querySelector('#start');
let btn_stop = document.querySelector('#stop');
let btn_reload = document.querySelector('#reload');
let text = document.querySelector('#text');

let posx1 = 340;
let posy1 = 0;
let w1 = 20;

let posx2 = 0;
let posy2 = 180;
let w2 = 10;

let dx;
let dy;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);  

ctx.fillStyle = 'green';
ctx.fillRect(posx1, posy1, w1, w1);

ctx.fillStyle = 'red';
ctx.fillRect(posx2, posy2, w2, w2);

btn_start.onclick = function start() {
	text.innerHTML = '<p>Початок</p>';
	localStorage.setItem(new Date(), 'Початок');
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height); 

	posx1 = 340;
	posy1 = 0;
	w1 = 20;

	posx2 = 0;
	posy2 = 180;
	w2 = 10;

	dx = 5;
	dy = 9;

	drawFrame();

	let btn = document.getElementById('divstart');
	btn.style.display = "none";
	let btn2 = document.getElementById('divstop');
	btn2.style.display = "block";

}

function drawFrame() {
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);  

	ctx.fillStyle = 'green';
	ctx.fillRect(posx1, posy1, w1, w1);

	ctx.fillStyle = 'red';
	ctx.fillRect(posx2, posy2, w2, w2);

	posy1 += dx;
	posx2 += dy;

	
	if (posy1 >= canvas.height-w1) {
		dx = -3;
		text.innerHTML += '<p>Зелений квадрат доторкнувся до нижньої стінки</p>';
		localStorage.setItem(new Date(), 'Зелений квадрат доторкнувся до нижньої стінки');
	} else if (posy1 <= 0){
		dx = 3;
		text.innerHTML += '<p>Зелений квадрат доторкнувся до верхньої стінки</p>';
		localStorage.setItem(new Date(), 'Зелений квадрат доторкнувся до верхньої стінки');
	}

	if (posx2 >= canvas.width-w2) {
		dy = -9;
		text.innerHTML += '<p>Червоний квадрат доторкнувся до правої стінки</p>';	
		localStorage.setItem(new Date(), 'Червоний квадрат доторкнувся до правої стінки');
	}else if (posx2 <= 0){
		dy = 9;
		text.innerHTML += '<p>Червоний квадрат доторкнувся до лівої стінки</p>';
		localStorage.setItem(new Date(), 'Червоний квадрат доторкнувся до лівої стінки');
	}

	if (posx2 >= 350 && posx2 <= 380 && posy1 >= 190 && posy1 <= 200) {
		dx = 0;
		dy = 0;
		alert("Зіткнення!");
		localStorage.setItem(new Date(), 'Зіткнення');
		let btn = document.getElementById('divstart');
		btn.style.display = "block";
		let btn2 = document.getElementById('divstop');
		btn2.style.display = "none";
		let canvas = document.getElementById('canvas');
		let ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);  

		ctx.fillStyle = 'green';
		ctx.fillRect(340, 0, 20, 20);

		ctx.fillStyle = 'red';
		ctx.fillRect(0, 180, 10, 10);
		text.innerHTML += '<p>Зіткнення</p>';
	} else {
		setTimeout("drawFrame()", 20);
	}
		
}
	

btn_stop.onclick = function stop() { 
	dx = 0;
	dy = 0;
	let btn = document.getElementById('divstop');
	btn.style.display = "none";
	let btn2 = document.getElementById('divreload');
	btn2.style.display = "block";
	text.innerHTML += '<p>Ви зупинили роботу програми</p>';
	localStorage.setItem(new Date(), 'Ви зупинили роботу програми');
}

btn_reload.onclick = function reload() { 
	dx = 0;
	dy = 0;
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);  

	ctx.fillStyle = 'green';
	ctx.fillRect(340, 0, 20, 20);

	ctx.fillStyle = 'red';
	ctx.fillRect(0, 180, 10, 10);
	let btn = document.getElementById('divreload');
	btn.style.display = "none";
	let btn2 = document.getElementById('divstart');
	btn2.style.display = "block";
	text.innerHTML += '<p>Перезавантажуємо програму</p>';
	localStorage.setItem(new Date(), 'Перезавантажуємо програму');
}