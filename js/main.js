$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('active');
		$('header nav').toggleClass('open');
	});
	$('#our-brands').slick({
		arrows:false,
		autoplay:true
	});
	$('#bfyNav a').on('click', function(){
		var section = $(this).attr('href');
		var offset = 0;
		if(window.innerWidth<=991){
			offset=75;
		}
		var scroll=$(section).offset().top-offset;
		$('html,body').animate({
		  scrollTop: scroll
		});
	});
});