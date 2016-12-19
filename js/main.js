$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('active');
		$('header nav').toggleClass('open');
	});
});