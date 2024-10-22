
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)
	list.onclick = function(e) {
		//console.log(e.target);		// 이벤트가 발생한 타겟(표적)
		let isbn = e.target.getAttribute('data-isbn');
		//alert(isbn);
		
		if(isbn) {
			// <img src='경로' width='100' height='150'>
			let img = document.createElement('img');
			img.width	= 100;
			img.height	= 150;
			img.src = 'images/' + isbn + '.jpg';
			
			//console.log(img);
			//pic.append(img);
			
			if(pic.getElementsByTagName('img').length > 0) {
				// 이미 있는 경우
				pic.replaceChild(img, pic.lastChild); // img를 pic의 마지막 자식과 교체
			}else {
				// pic 아래 <img>태그가 없는 경우
				pic.append(img);
				del.disabled = false;
			}	
		del.onclick = function() {
		pic.removeChild(img);
		}
	}
		
	}


  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
  
 
  
//};
