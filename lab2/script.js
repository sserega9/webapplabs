
//alert('work');


// task number 1 -----------------------------------------------------------
let text_header = document.querySelector('#text-header').textContent;
let text_footer = document.querySelector('#text-bottom').textContent;
// let replace = text_footer;
// text_footer = text_header;
// text_header = replace;
document.getElementById('text-header').innerHTML = text_footer;
document.getElementById('text-bottom').innerHTML = text_header;


// task number 2 -----------------------------------------------------------
let a = 5;
let h = 4;
let s = a * h;
document.querySelector('#demo').innerHTML = 'square: ' + s;
//task number 3
let btn = document.querySelector('#btn');
btn.onclick = function () {
    let a_t = Number(document.getElementById('a').value);
    let b_t = Number(document.getElementById('b').value);
    let c_t = Number(document.getElementById('c').value);
    document.cookie = c_t;
    if (a_t + c_t < b_t) {
        document.cookie;
        alert('такого трикутника не існує');
    }
    if (a_t + b_t < c_t) {
        alert('такого трикутника не існує');
    }
    if (c_t + b_t < a_t) {
        alert('такого трикутника не існує');
    }
}
console.log('test');

let coc = prompt('якщо хочете видалити всі кукі - натисніть 0');

if (coc == 0) {
    var d = new Date();
    d.setTime(d.getTime());
    var expires = "expires=" + d.toUTCString();
    document.cookie = 'COOKIE_NAME' + "=" + "" + ";domain=domain.com;path=/;expires=" + expires;
    alert('work');
}
else{
    alert('кукі збережено');
}
console.log(document.cookie);


// task number 4 ----------------------------------------------------------
let cur = document.querySelector('#cur');
localStorage.test = "italic";

if(localStorage.saveFontStyleItalic){
    cur.style.fontStyle = localStorage.test;
}

function bigImg(x) {
    cur.style.fontStyle = localStorage.test;
    localStorage.saveFontStyleItalic = true;
}


// task number 5 ----------------------------------------------------------
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("введіть текст для елемента списка", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
    // localStorage.five = li;
    // console.log(localStorage.five);
}
