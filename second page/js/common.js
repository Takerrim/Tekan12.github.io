$(function() {
	$('.hamburger').click(function(){
		$('.hamburger').next('ul').slideToggle();
	});
	$('.up').click(function(){
		$('html,body').animate({scrollTop: 0}, 500);
	});
	$(document).scroll(function(){
		if($(document).scrollTop()>0) {
			$('.up').fadeIn();
		}	else {
			$('.up').fadeOut();
		}	
	});
});

