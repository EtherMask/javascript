/**
 * 
 */

$(function(){
	
	// '+'버튼이 눌렸을때
	$('.fontSize > button:eq(0) ').click(function(){
		$('#txt').animate({'fontSize' : '+=1'}, 100);
	});
	
	// '-'버튼이 눌렸을때
	$('.fontSize > button:eq(1) ').click(function(){
		$('#txt').animate({'fontSize' : '-=1'}, 100);
		});
	
	// font 셀렉트의 값을 변경했을때
	$('#fontstyle').change(function(){
		$('#txt').css({'font-family': $(this).val()});
	});
	
	
});