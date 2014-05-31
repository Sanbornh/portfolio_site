
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

// ----- ACTUAL JS SHIT ----- \\

$( window ).ready(function() {

	$('.content-container').mouseenter(function() {
		footerGrow($(this).data('color'));
	});

	$('.content-container').mouseleave(function() {
		footerShrink();
	});

});	