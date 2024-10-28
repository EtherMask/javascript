/*
 * :D :) ^ㅅ^
 */

$(function(){
	$('#bio > div').hide();
	
	$('#bio > div:first').show();
	
	let h3 = $('#bio > h3');
	h3.css({'cursor': 'pointer'});
	
	h3.click(function(){
		//$(this).next().toggle();
		$(this).next().animate({'height': 'toggle'}, 1000, 'easeOutBack');
	});
	
});