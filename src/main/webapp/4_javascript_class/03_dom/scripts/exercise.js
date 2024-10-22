
window.onload = function() {
	
	var td = document.querySelectorAll('tr > td');
		for(let i=0 ;i<td.length; i++) {

			td[i].onclick = function() {
			alert('ok');
			alert(td[i].getAttribute('data-price'));
	}
}
}