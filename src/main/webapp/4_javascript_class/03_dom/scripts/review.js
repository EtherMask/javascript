
window.onload = function() {
	
	var img = document.querySelector('#profile> img');	// id 프로필의 자식 img를 검색
	
	var desc_user = document.querySelectorAll('.user');	//user class 검색
	
	var btn = document.querySelector('#btn');
	btn.onclick = function() {
		alert('ok');
		
		img.src = 'images/my.PNG'
		desc_user[0].innerHTML = '이름: 홍길동';
		desc_user[1].innerHTML = '주소: 서울시';
		desc_user[2].innerHTML = '연락처: 010-1234-5678';
	}
}