/**
 * 
 */

$(function(){
	
	$('#signup > form').validate({
		rules: {
			name: {
				required: true,
				minlength : 2
			},
			email : {
				required: true,
				email : true
			},
			website: {
				url: true
			},
			password: {
				required: true,
				minlength: 6,
				maxlength: 10
			},
			passconf: {
				equalTo : '#password'
			}
		},
		success : function(label){
			label.addClass('valid');
			label.text('성공');
		}
	});
	
	// 위 조항 모두 체크가 되면 위에있는 모든 항목에 체크가 됨
	// 그렇지 않고 체크가 해제되면 모든 항목에 체크가 해제되야 함
	// [hint] 속성값처리: attr()
	// [참고] attr() 문제생기면 -> prop()
	$('.check-all').click(function(){
/*		var allck = $('.check-all').is(':checked');
		if (allck)
			$('.agree').prop('checked', true);
		else 
			$('.agree').prop('checked', false);*/
		$('.agree').prop('checked', $(this).prop('checked'));
});
	// 하나라도 체킹해제되면 모수 체킹하는것도 체킹 해제되기
	$('.agree').click(function(){
		let check = $('.agree').is(':checked');
		if (check)
			$('.check-all').prop('checked', false);
	});
	
	
	
	
});