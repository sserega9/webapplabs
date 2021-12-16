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

function deleteC() {
    if (getCookie("triangle") != "") {
        let delete_cookie = confirm('Записане кукі: '+getCookie("triangle")+'\nВидалити кукі файли?');
        if (delete_cookie) {
            document.cookie = 'triangle=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
            alert('Кукі видалено')
        }
    }
}


// Завдання 4 ------------------------------------------------------------------------
// let cur = document.querySelector('#cur');
// localStorage.test = "italic";

// if (localStorage.saveFontStyleItalic) {
//     cur.style.fontStyle = localStorage.test;
// }

// function bigImg(x) {
//     cur.style.fontStyle = localStorage.test;
//     localStorage.saveFontStyleItalic = true;
// }


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
        // localStorage.five = li;
        // console.log(localStorage.five);
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
