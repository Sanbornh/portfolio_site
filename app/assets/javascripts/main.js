
// -- FUNCTION DECLARATION -- \\

function footerGrow(color) {
	$('.footer').css( 'background-color', color )
		.animate({height: '70%'}, 100)
		.animate({top: '30%'}, 100);
};

function footerShrink() {
	$('.footer').animate({top: '100%'}, 100).animate({height: '0%'}, 100)
		
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