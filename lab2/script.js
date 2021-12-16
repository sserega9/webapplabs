// Завдання 1 -----------------------------------------------------------------------
let text_header = document.querySelector('#text-header').textContent;
let text_footer = document.querySelector('#text-bottom').textContent;
document.getElementById('text-header').innerHTML = text_footer;
document.getElementById('text-bottom').innerHTML = text_header;


// Завдання 2 -----------------------------------------------------------------------
let a = 5;
let h = 6;
let s = a * h;
document.querySelector('#romb').innerHTML = 'Площа ромба = a*h = '+ a + '*' + h + ' = ' + s;


// Завдання 3 -----------------------------------------------------------------------
let btn = document.querySelector('#btn');
btn.onclick = function () {
    let a_t = Number(document.getElementById('a').value);
    let b_t = Number(document.getElementById('b').value);
    let c_t = Number(document.getElementById('c').value);
    if (a_t + c_t > b_t && a_t + b_t > c_t && c_t + b_t > a_t) {
        let task3 = 'triangle';
        let value = 'Трикутник зі сторонами '+a_t+', '+b_t+' і '+c_t+' існує';
        setCookie(task3, value, 365);
        alert(getCookie(task3));
        return false;
    }
    else {
        let task3 = 'triangle';
        let value = 'Трикутника зі сторонами '+a_t+', '+b_t+' і '+c_t+' не існує';
        setCookie(task3, value, 365);
        alert(getCookie(task3));
        return false;
    }
}


// Завдання 4 ------------------------------------------------------------------------
let cur = document.querySelector('#cur');
let italic = "italic";
let normal = "normal";

function mouse_italic(object) {
    if (cur.style.fontStyle == italic) {
        cur.style.fontStyle = normal;
    } else {
        cur.style.fontStyle = italic;
    }
}

let ratio_italic = document.querySelector('#ratio_italic');
let ratio_normal = document.querySelector('#ratio_normal');

ratio_italic.onclick = function (){
    localStorage.saveFontStyleItalic = true;
}

ratio_normal.onclick = function (){
    localStorage.saveFontStyleItalic = false;
}


// Завдання 5 ------------------------------------------------------------------------
let btn2 = document.querySelector('#btn2');
btn2.onclick = function (){
    let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
        let data = prompt("Уведіть текст для елемента списка", "");
        if (!data) {
            break;
        }
        let li = document.createElement('li');
        li.textContent = data;
        ul.append(li);
    }
}


// Додаткові функцції -------------------------------------------------------------

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "/admin";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var user = getCookie(cname);
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function onload_function() {
    
    if (getCookie("triangle") != "") {
        let delete_cookie = confirm('Записане кукі: '+getCookie("triangle")+'\nВидалити кукі файли?');
        if (delete_cookie) {
            document.cookie = 'triangle=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
            alert('Кукі видалено')
        }
    }
    
    let cursor = document.querySelector('#cur');
    if (localStorage.saveFontStyleItalic == true) {
        cursor.style.fontStyle = "italic";
    } else if (localStorage.saveFontStyleItalic == false) {
        cursor.style.fontStyle = "normal";
    }
}
