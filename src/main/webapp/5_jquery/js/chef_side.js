$(function(){
	
	var orderNumber = getOrderNumber();
	// 1.
	var calendar = new Date();
	let td = [	$('<td/>').text(orderNumber()) 
				,$('<td/>').text('김밥')
				,$('<td/>').text('1') 
				,$('<td/>').text('3000')
				,$('<td/>').text(`${calendar.getFullYear()}-${calendar.getMonth()+1}-${calendar.getDate()}
								  ${calendar.getHours()}:${calendar.getMinutes()}:${calendar.getSeconds()}	`)
				,$('<td/>').text('주문 대기중')
			];
	
	let tr = $('<tr/>');
	for(let temp of td){
		tr.append(temp);
	}
	tr.append($('<td/>').append($('<button/>').text('승인').addClass('countBtn').addClass('btn_accept')) );
	tr.append($('<td/>').append($('<button/>').text('취소').addClass('countBtn').addClass('btn_cancel')) );
	
	$('#list').append(tr);
	
	// 2.
	var calendar = new Date();
	let td2 = [	$('<td/>').text(orderNumber()) 
		,$('<td/>').text('김밥')
		,$('<td/>').text('1') 
		,$('<td/>').text('3000')
		,$('<td/>').text(`${calendar.getFullYear()}-${calendar.getMonth()+1}-${calendar.getDate()}
						  ${calendar.getHours()}:${calendar.getMinutes()}:${calendar.getSeconds()}	`)
		,$('<td/>').text('주문 대기중')
	];

	let tr2 = $('<tr/>');
	for(let temp of td2){
	tr2.append(temp);
	}
	tr2.append($('<td/>').append($('<button/>').text('승인').addClass('countBtn').addClass('btn_accept')) );
	tr2.append($('<td/>').append($('<button/>').text('취소').addClass('countBtn').addClass('btn_cancel')) );
	
	$('#list').append(tr2);
	
	
	// event
	$('.btn_accept').on('click', function(){
		
		if($(this).text() == '승인'){
			$(this).text('완료');
			$(this).parent().parent().find('td:eq(5)').text("주문 조리중");
			
			$(this).animate({marginLeft:'0px'},100,'',function(){
				$(this).animate({marginLeft:'3px'},100,'',function(){
					$(this).animate({marginLeft:'0px'},100,'',function(){
						$(this).animate({marginLeft:'3px'},100,'',function(){
							$(this).animate({marginLeft:'0px'},100,'',function(){
								$(this).animate({marginLeft:'3px'},100);
							});
						});
					});
				});
			});
			
		}
		else if($(this).text() == '완료'){
			
			
			let tr = $('<tr/>');
			
			
			for(let i=1; i <= 5; i++){
				let row = $(this).parent().parent().find('td:nth-of-type('+i+')').text();
				tr.append( $('<td/>').text(row) );
			}
			
			$('#completelist').append(tr);
			
			$(this).parent().parent().remove();
		}
		
	})
	$('.btn_cancel').on('click', function(){
		let orderInfo = $(this).parent().parent().find('td').text();
		console.log(orderInfo);
		$(this).parent().parent().remove();
	})
	
	// 주문번호
	function getOrderNumber(){
		var number = 1;
		return function(){
			return number++;
		}
	}
	
})