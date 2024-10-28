/*
 * 
 */

$(function(){
	
	$('p#intro').animate({
		padding : '20px',
		fontSize: '30px'
	}, 2000)
	
	$('div#navigation > ul > li').hover(function(){
		$(this).animate({paddingLeft: '+=15px'}, 200);
	}, function(){
		$(this).animate({paddingLeft: '-=15px'}, 200);
	});
	
	$(window).scroll(function(){
		$('#navigation').css({'top': $(document).scrollTop()});
	});
	
	
});