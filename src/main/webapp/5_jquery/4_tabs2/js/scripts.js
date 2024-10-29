$(function(){
	//class면 .으로 접근 
	let topDiv = $('.tabSet');
	
	//li가 자식이고 a는 자식이 아니니까 >를 하면 안됨 
	var anchors = topDiv.find('ul.tabs a')
	//div중에서 panel을 찾을 거임
	var panelDivs = topDiv.find('div.panels > div.panel')
	
	anchors.show();
	panelDivs.hide();
	
	//class가 on을 필터 
	var lastAnchor = anchors.filter('.on');
	//이 필터된 것에 href의 속성의 값을 찾아간다. 
	var lastPanel = $(lastAnchor.attr('href'));
				//$('#panel1-1')
	lastPanel.show();	

	anchors.click(function(){
		var currentAnchor = $(this);
		var currnetPanel = $(currentAnchor.attr('href'));
		
		//on이라는 애가 css에서 색을 바꿔줌. 
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		
		//이렇게만 있으면 한번만 되는 거임. 
		lastPanel.hide();
		currnetPanel.show();
		
		//한 번 밖에 수행이 안 되기 때문에 마지막을 현재로 바꿔줘야 함. 
		lastAnchor = currentAnchor;
		lastPanel = currnetPanel;
	})			
})

/*function increaseCount(button) {
    var countSpan = $(button).siblings('.count');   
    var count = parseInt(countSpan.text());    
    countSpan.text(count + 1);
}*/


/*김밥사진 확대 -> 축소*/
$(function() {
    $('.menu img').hover(function() { // 마우스 올라갔을 때
        $(this).addClass('hover');
    }, function() { // 마우스 나갔을 때
        $(this).removeClass('hover'); // 바로 hover 클래스 제거
    });
});


/*김밥사진 누르면 주문수량 추가*/
