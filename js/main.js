$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('active');
		$('header nav').toggleClass('open');
	});
	$('#our-brands').slick({
		arrows:false,
		fade:true,
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
	var pro_header = document.querySelectorAll(".fill-banner");
	var career_bac = document.querySelectorAll("#careers");
	var speed = 0.2;
	window.onscroll = function(){
		if(window.innerWidth>640){
			[].slice.call(pro_header).forEach(function(el,i){
	    var windowYOffset = window.pageYOffset,
	        elBackgrounPos = "0% " + (windowYOffset * speed) + "px";
	    el.style.backgroundPosition = elBackgrounPos;
	    });

	    [].slice.call(career_bac).forEach(function(el,i){
	    var windowYOffset = window.pageYOffset,
	        elBackgrounPos = "0% " + (windowYOffset * speed) + "px";
	    el.style.backgroundPosition = elBackgrounPos;
	    });
		}  
	};
	$(document).scroll(function(){
    var scrolled = $(this).scrollTop();
    var hWindow = $(window).height();
    var hCurrentCenter = scrolled+(hWindow*0.75);
    $('.about-us .mission-statement img:not(.started)').each(function(index, el){
      if(hCurrentCenter>$(el).offset().top){
        if(!$(el).hasClass('started')){
          $(el).addClass('started');
        }
      }
    });
  });
});