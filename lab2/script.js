
setCookie('name', 'value');  // строчный куки
alert(getCookie('name'));  // получить строку);


document.cookie = 'name=Kely; expires=' + new Date(9999, 0, 1).toUTCString;
console.log(document.cookie);



// Завдання 1 -----------------------------------------------------------------------
// 1. Поміняйте місцями тексти, позначені «1» та «6»
// ----------------------------------------------------------------------------------
let text_header = document.querySelector('#text-header').textContent;
let text_footer = document.querySelector('#text-bottom').textContent;
document.getElementById('text-header').innerHTML = text_footer;
document.getElementById('text-bottom').innerHTML = text_header;


// Завдання 2 -----------------------------------------------------------------------
// 2. Напишіть функцію, яка обчислює площу ромба, беручи необхідні значення із відповідних 
// змінних у скрипті, і виводить отриманий результат в кінці контенту в блоці «3». 
// ----------------------------------------------------------------------------------
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
    let name = 'triangle';
    if (a_t + c_t > b_t && a_t + b_t > c_t && c_t + b_t > a_t) {
        let value = 'Трикутник існує';
        localStorage.setItem(name, value);
    }
    else {
        let value = 'Трикутника не існує';
        localStorage.setItem(name, value);
    }

    alert(localStorage.getItem(name));
    console.log('Cookie:');
    console.log(localStorage.getItem(name));
}

// let btn = document.querySelector('#btn');
// btn.onclick = function () {
//     let a_t = Number(document.getElementById('a').value);
//     let b_t = Number(document.getElementById('b').value);
//     let c_t = Number(document.getElementById('c').value);
//     let name = 'triangle';
//     if (a_t + c_t > b_t && a_t + b_t > c_t && c_t + b_t > a_t) {
        
//         let value = 'Трикутник існує';
//         setCookie(name, value, 365)
//         // document.cookie = 'triangle=Трикутник зі сторонами '+a_t+', '+b_t+' і '+c_t+' існує';
//         // alert('Трикутник зі сторонами '+a_t+', '+b_t+' і '+c_t+' існує');
//     }
//     else {
//         let value = 'Трикутника не існує';
//         setCookie(name, value, 365)
//         // document.cookie = 'triangle=Трикутника зі сторонами '+a_t+', '+b_t+' і '+c_t+' не існує';
//         // alert('Трикутника зі сторонами '+a_t+', '+b_t+' і '+c_t+' не існує');
//     }

//     alert(getCookie(name));
//     console.log('Cookie:');
//     console.log(getCookie(name));
// }


//     let delete_cookie = prompt('Видалити кукі файли?');
//     alert('кукі видалено');
//     var cookie_date = new Date();
//     cookie_date.setMonth(cookie_date.getMonth() - 1);
//     document.cookie = "name=user;expires=" + cookie_date.toUTCString();
// //task number 4
// let cur = document.querySelector('#cur');
// localStorage.test = "italic";

// if (localStorage.saveFontStyleItalic) {
//     cur.style.fontStyle = localStorage.test;
// }

// function bigImg(x) {
//     cur.style.fontStyle = localStorage.test;
//     localStorage.saveFontStyleItalic = true;
// }
//Завдання 5


// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt("введіть текст для елемента списка", "");

//     if (!data) {
//         break;
//     }

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
//     // localStorage.five = li;
//     // console.log(localStorage.five);
// }


// Додаткові функцції -------------------------------------------------------------

// Перевірка роботи кукі
// if (navigator.cookieEnabled === false){
//     alert("Cookies виключені!");
// } else {
//     alert("Cookies включені!");
// }

document.cookie = "name=user"; 





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
    // return "";
}
