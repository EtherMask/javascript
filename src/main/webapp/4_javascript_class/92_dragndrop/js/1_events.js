
window.onload = function()
{
	// 캔버스에 트리 이미지 삽입
	var tree =  document.querySelector("#tree");
	var img = document.querySelector('#img');
	img.style.display = 'none';
	var ctx = tree.getContext("2d");
	ctx.drawImage(img, 0, 0);

	
	var lis = document.querySelectorAll(".item");
	var targets = document.querySelectorAll(".dropTarget");

	
	
	for (var i = 0; i < lis.length; i++) {
		lis[i].addEventListener("dragstart", function() {
			console.log("drag start event");
		});
		lis[i].addEventListener("drag", function() {
			console.log("drag  event");
		});
		lis[i].addEventListener("dragend", function() {
			console.log("drag end  event");
		});
	}

	for (var i = 0; i < targets.length; i++) {
		targets[i].addEventListener("dragenter", function(e) {
			console.log("drag enter event");
		});
		targets[i].addEventListener("dragleave", function() {
			console.log("drag leave event");
		});
		targets[i].addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("drag over event");
		});
		targets[i].addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("drop event");
		});
	}

}

