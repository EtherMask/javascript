/**
 * 
 */

$(function(){
	
	$('a[rel="prettyPopin"]:eq(0)').prettyPopin({
		width: 500,
		height: 300
	});
	$('a[rel="prettyPopin"]:eq(1)').prettyPopin({
			width: 600,
			height: 300,
			callback: function(){
				alert('팝업이 닫혔습니다ㅋ')
			}
		});
});