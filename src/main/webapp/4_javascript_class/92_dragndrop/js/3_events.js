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
			// 전송할 데이타를 객체로 만들고 Json 으로 변환하여 지정
			var dragSourceObj = {
				"id" : e.target.id,
				"soffsetX" : e.offsetX,
				"soffsetY" : e.offsetY
			};
			e.dataTransfer.setData("dragSource", JSON.stringify(dragSourceObj));
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
		// json 데이타를 다시 객체로 파싱
		var dragSrcObj = JSON.parse(e.dataTransfer.getData("dragSource"));
		var id = dragSrcObj.id;
		var x = e.offsetX - dragSrcObj.soffsetX;
		var y = e.offsetY - dragSrcObj.soffsetY;
		
		ctx.drawImage(document.getElementById(id), x, y);
		
	});
	
}