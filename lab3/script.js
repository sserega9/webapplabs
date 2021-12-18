
let btn = document.querySelector('#btn_add');

btn.onclick = function (){

  let input = document.querySelector('#add_item');

  if (input.value != "") {

    let menu = document.querySelector('#myTopnav');
    menu.insertAdjacentHTML('beforeend', '<a href=#'+input.value.toLowerCase()+' id='+input.value.toLowerCase()+'>'+input.value+'</a>');
    localStorage.menu = menu.innerHTML;

    let dropdown = document.querySelector('#drop');
    dropdown.insertAdjacentHTML('beforeend', '<option value='+input.value.toLowerCase()+' id=d_'+input.value.toLowerCase()+'>'+input.value+'</option>');
    localStorage.drop = dropdown.innerHTML;

    input.value = "";

  }
  
}

let btn2 = document.querySelector('#btn_del');

btn2.onclick = function (){

  let dropdown = document.querySelector('#drop');

  if (dropdown.value != "") {
    let el = document.querySelector('#'+dropdown.value);
    el.remove();
    let menu = document.querySelector('#myTopnav');
    localStorage.menu = menu.innerHTML;

    let d_el = document.querySelector('#d_'+dropdown.value);
    d_el.remove();
    localStorage.drop = dropdown.innerHTML;
    dropdown.value = "";
  }
}

function onload_body() {

  if (localStorage.getItem('menu') !== null) {

    let menu = document.querySelector('#myTopnav');
    menu.innerHTML = localStorage.menu;

    if (localStorage.getItem('drop') !== null) {

      let dropdown = document.querySelector('#drop');
      dropdown.innerHTML = localStorage.drop;

    }
  }
}