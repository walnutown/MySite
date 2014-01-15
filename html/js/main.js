$(document).ready(function(){
	// init carousel speed
	$('.carousel').carousel({
  		interval: 5000
	});

	$(".nav-about").click(function(){
		$(".about-container").fadeIn(1000);
		$(".contact-container").hide();

	});

	$(".nav-contact").click(function(){
		$(".contact-container").fadeIn(1000);
		$(".about-container").hide();
		//$(".carousel-container").fadeOut(slow);
	});

});