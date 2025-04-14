(function($) {
	"use strict";

/* ----------------------------
    preloader
    ------------------------------ */

$(window).on('load', function(){        
	$('#preloader').delay(300).fadeOut('slow',function(){
	$(this).remove();
	});
});

/* ----------------------------
    jQuery sticky area
    ------------------------------ */
	
$('.header-navigation').sticky({
	topSpacing: 0,
});

/* ----------------------------
    Top Scroll
    ------------------------------ */

var offset = 220;
var duration = 500;
jQuery(window).on('scroll', function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.scroll-top').fadeIn(duration);
	} 
	else {
		jQuery('.scroll-top').fadeOut(duration);
	}
});
jQuery('.scroll-top').on('click', function() {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
})

/* ----------------------------
	@module       Copyright
	@description  Evaluates the copyright year
    ------------------------------ */
	
var currentYear = (new Date).getFullYear();
	$(document).ready(function () {
		$(".current-year").text((new Date).getFullYear());
});

/* ----------------------------
    venobox
    ------------------------------ */

$('.venobox').venobox();

/* ----------------------------
    testimonials
    ------------------------------ */

$('.testimonial-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots:false,
	items: 1,
	nav: true,
	autoplay:true,
	navText : ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
	responsiveClass: true
})

/* ----------------------------
    portfolio
    ------------------------------ */

var filterList = {
	init: function () {
	// MixItUp plugin
	// http://mixitup.io
	$('#portfoliolist').mixItUp({
  		selectors: {
    	target: '.portfolio',
    	filter: '.filter'
    		},
				load: {
				filter: '.design, .branding, .advertising, .photography, .wordpress'  
			}
		});
	}
};

// Run the show!
filterList.init();

/* ----------------------------
    counter up
    ------------------------------ */

$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* ----------------------------
    Portfolio Single Carousel
    ------------------------------ */
	
$('.portfolio-single-carousel').owlCarousel({
	loop: true,
	margin: 0,
	dots:false,
	nav: true,
	items: 1,
	autoplay:true,
	navText : ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
	responsiveClass: true
})

})(jQuery);