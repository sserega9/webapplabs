
let btn = document.querySelector('#btn_add');

btn.onclick = function (){
	let menu = document.querySelector('#myTopnav');
	let input = document.querySelector('#add_item');
	try {
      let xhr = new XMLHttpRequest();
      let id = urlParams.get('act')
      let url = 'create.php';
      let body = 'item=<a href=#"'+input.value.toLowerCase()+'">'+input.value+'</a>';
      xhr.open("POST", url, false);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
      xhr.send(body); 
    } catch {
      alert("Error");
    } 
	// menu.insertAdjacentHTML('beforeend', '<a href=#"'+input.value.toLowerCase()+'">'+input.value+'</a>');
}