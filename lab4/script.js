
let btn_start = document.querySelector('#start');
let div_start = document.getElementById('divstart');
let btn_stop = document.querySelector('#stop');
let div_stop = document.getElementById('divstop');
let btn_reload = document.querySelector('#reload');
let div_reload = document.getElementById('divreload');
let text = document.querySelector('#text');

let posx1 = 340;
let posy1 = 0;
let w1 = 20;

let posx2 = 0;
let posy2 = 180;
let w2 = 10;

let dx = 0;
let dy = 0;

let timer;
let finished;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);  

ctx.fillStyle = 'green';
ctx.fillRect(posx1, posy1, w1, w1);

ctx.fillStyle = 'red';
ctx.fillRect(posx2, posy2, w2, w2);

btn_start.onclick = function() {

	finished = false;

	text.innerHTML = '<p>Початок</p>';
	localStorage.setItem(new Date(), 'Початок');

	ctx.clearRect(0, 0, canvas.width, canvas.height); 

	posx1 = 340;
	posy1 = 0;
	w1 = 20;

	posx2 = 0;
	posy2 = 180;
	w2 = 10;

	dx = 4;
	dy = 5;

	drawFrame();

	let btn = document.getElementById('divstart');
	btn.style.display = "none";
	let btn2 = document.getElementById('divstop');
	btn2.style.display = "block";

}

function drawFrame() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let big = document.getElementById('big');
	let small = document.getElementById('small');
	let dx_t = document.getElementById('dx');
	let dy_t = document.getElementById('dy');

	ctx.fillStyle = 'green';
	ctx.fillRect(posx1, posy1, w1, w1);

	ctx.fillStyle = 'red';
	ctx.fillRect(posx2, posy2, w2, w2);

	big.innerHTML = "y = " + posy1;
	small.innerHTML = "x = " + posx2;
	dx_t.innerHTML = "dx = " + dx;
	dy_t.innerHTML = "dy = " + dy;

	if (posx2 > 340 && posx2 < 360 && posy1 == 180 && finished == false) {

		finished = true;
		dx = 0;
		dy = 0;
		alert("Зіткнення!");
		localStorage.setItem(new Date(), 'Зіткнення');
		div_start.style.display = "block";
		div_stop.style.display = "none";

		ctx.clearRect(0, 0, canvas.width, canvas.height);  

		ctx.fillStyle = 'green';
		ctx.fillRect(340, 0, 20, 20);

		ctx.fillStyle = 'red';
		ctx.fillRect(0, 180, 10, 10);
		text.innerHTML += '<p>Зіткнення</p>';

	} else {

		if (posy1 >= canvas.height-w1) {
			dx = -4;
			text.innerHTML += '<p>Зелений квадрат доторкнувся до нижньої стінки</p>';
			localStorage.setItem(new Date(), 'Зелений квадрат доторкнувся до нижньої стінки');
		} else if (posy1 <= 0){
			dx = 4;
			text.innerHTML += '<p>Зелений квадрат доторкнувся до верхньої стінки</p>';
			localStorage.setItem(new Date(), 'Зелений квадрат доторкнувся до верхньої стінки');
		}

		if (posx2 >= canvas.width-w2) {
			dy = -5;
			text.innerHTML += '<p>Червоний квадрат доторкнувся до правої стінки</p>';	
			localStorage.setItem(new Date(), 'Червоний квадрат доторкнувся до правої стінки');
		} else if (posx2 <= 0){
			dy = 5;
			text.innerHTML += '<p>Червоний квадрат доторкнувся до лівої стінки</p>';
			localStorage.setItem(new Date(), 'Червоний квадрат доторкнувся до лівої стінки');
		}

		posy1 += dx;
		posx2 += dy;
		timer = window.setTimeout("drawFrame()", 20);
	}	
}
	

btn_stop.onclick = function() {

	while (timer--) {
    	window.clearTimeout(timer);
	}

	dx = 0;
	dy = 0; 

	div_stop.style.display = "none";
	div_reload.style.display = "block";

	text.innerHTML += '<p>Ви зупинили роботу програми</p>';
	localStorage.setItem(new Date(), 'Ви зупинили роботу програми');
}

btn_reload.onclick = function() { 

	div_reload.style.display = "none";
	// div_start.style.display = "block";
	div_stop.style.display = "block";

	text.innerHTML += '<p>Перезавантажуємо програму</p>';
	localStorage.setItem(new Date(), 'Перезавантажуємо програму');

	ctx.clearRect(0, 0, canvas.width, canvas.height);  

	posx1 = 340;
	posy1 = 0;
	posx2 = 0;
	posy2 = 180;

	ctx.fillStyle = 'green';
	ctx.fillRect(posx1, posy1, w1, w1);

	ctx.fillStyle = 'red';
	ctx.fillRect(posx2, posy2, w2, w2);

	dx = 0;
	dy = 0; 

}
