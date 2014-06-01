
// -- FUNCTION DECLARATION -- \\

function footerGrow(color) {
	setTimeout(function() { 
		$('.footer').css( 'background-color', color )
		.animate({height: '70%'}, {duration: 100, easing: 'easeOutQuad'})
		.animate({top: '30%'}, {duration: 100, easing: 'easeOutQuad'});
	}, 100);
};

function footerShrink() {
	$('.footer').animate({top: '100%'}, {duration: 100, easing: 'easeOutQuad'})
		.animate({height: '0%'}, {duration: 100, easing: 'easeOutQuad'})
		
};

function socialGrow() {
	//stuff
}

function socialShrink() {
	//stuff
}

// ----- ACTUAL JS SHIT ----- \\

$( window ).ready(function() {

	// Controls the colouring and animation of the
	// footer on mouseover.
	// $('.content-container').mouseenter(function() {
	// 	footerGrow($(this).data('color'));
	// });

	// $('.content-container').mouseleave(function() {
	// 	footerShrink();
	// });

	// Controls show/hide of social links
	$(window).scroll(function() {
	  if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.social-links').animate({top: '-6%'}, {duration: 200, easing: 'easeOutQuad'});

      setTimeout(function() {
      	$('.social-links').css('z-index', 1);
      }, 200);
	  }

	  if($(window).scrollTop() == 0) {
	  	 $('.social-links').animate({top: '0%'}, {duration: 200, easing: 'easeOutQuad'}).css('z-index', -1);	
	  }
	});

	// AJAX request for about page.
	$('#about-column').click(function(){
		// $.ajax({
		// 	url: '/about',
		// 	type: 'GET',
		// 	dataType: 'html'
		// }).done(function(data){
		// 	console.log(data);
		// });
		$.getScript('/about').done(function(data) {
			console.log(data);
		});
	});



});	