$(document).on('ready', function() {

	var x;
	var y;
	

	// var markerPosition = function (x, y){$('.main').append('<div class="location">@</div>');
	// 			$('.location').css({
	// 				        position: 'absolute',
	// 						top: y - 10,
	// 						left: x - 10,
	// 					});		
		// };


	$('.main').on('click', function(event){
		var markerPosition = $('<div>@</div>');
		x = event.pageX;
		y = event.pageY;
		console.log('x: ', x);
		console.log('y: ', y);
		markerPosition.addClass('marker');
		markerPosition.css({
			position: 'absolute',
			top: y - 10,
			left: x - 10,
		});
	$('.main').append(markerPosition);
	$('.marker').removeClass();
	$(markerPosition).on('click', function(){
	$(this).remove();
});


});
	
	// $('.main').on('click', function(event){
	// 	x = event.pageX;
	// 	y = event.pageY;
	// 	console.log('x: ', x);
	// 	console.log('y: ', y);

	// 	$('.main').append('<div class="location">@</div>');
	// 			$('.location').css({
	// 				        position: 'absolute',
	// 						top: y - 10,
	// 						left: x - 10,
	// 					});		
	// 	});





  
});