window.onload = function(){
	
	// 캔버스에 트리 이미지 삽입
	var tree =  document.querySelector("#tree");
	var img = document.querySelector('#img');
	img.style.display = 'none';
	var ctx = tree.getContext("2d");
	ctx.drawImage(img, 0, 0);
	
	
	var lis = document.querySelectorAll(".item");
	for (var i = 0; i < lis.length; i++) {
		lis[i].addEventListener("dragstart", function(e) {
			//---------------------------------------------------
			// 전송할 데이타들을 지정한다.
			e.dataTransfer.setData("id", e.target.id);
			e.dataTransfer.setData("soffsetX", e.offsetX);
			e.dataTransfer.setData("soffsetY", e.offsetY);
			
			e.dataTransfer.effectAllowed = "move";
		});
	}
	
	tree.addEventListener("dragover", function(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
	});
	tree.addEventListener("drop", function(e) {
		e.preventDefault();
		//---------------------------------------------------
		// 전송한 데이타들을 얻어온다.
		var id = e.dataTransfer.getData("id");		
		var x = e.offsetX - e.dataTransfer.getData("soffsetX");
		var y = e.offsetY - e.dataTransfer.getData("soffsetY");
		
		// 전송받은 데이타를 다시 그린다.
		ctx.drawImage(document.getElementById(id), x, y);
		
		
		//---------------------------------------------------
		// 해당 요소를 지운다.
		document.getElementById(id).remove()
	});
	
}