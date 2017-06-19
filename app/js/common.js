//preloader

$(window).on('load', function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut(100); 
});


$(function() {


//Active menu
$('.top-tabs li').on('click', function() {
	$('.top-tabs li').removeClass('active');
	$(this).addClass('active');
});


//toggle button
$('.toggle-btn').on('click', function() {
	$(this).toggleClass('on');
	$('.header-nav').slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '768') {
		$('.header-nav').removeAttr('style');
		$('.toggle-mnu').removeClass('on');
	}
});


//Change shopping cart icon
$(window).resize(function(){
	if($(window).width() < '768') {
		$('.top-cart i').removeClass('fa-shopping-cart').addClass('fa-shopping-bag');
	} else {
		$('.top-cart i').removeClass('fa-shopping-bag').addClass('fa-shopping-cart');
	}
});

if($(window).width() < '768') {
	$('.top-cart i').removeClass('fa-shopping-cart').addClass('fa-shopping-bag');
} else {
	$('.top-cart i').removeClass('fa-shopping-bag').addClass('fa-shopping-cart');
}


//open-close description detail
$('.descr-toggle').on('click', function() {
	if ($(this).hasClass('close')) {
		$(this).removeClass('close');
	} else {
		$(this).addClass('close');
	}
	$(this).closest('.similar-wrapper').find('.similar-description').slideToggle();
	$(this).closest('.description').find('.descr-content').slideToggle();
});


//to-top button 
$('.to-top').on('click', function() {
	$('body, html').animate({ scrollTop:0 },800);
	return false;
});

$(window).scroll(function() {
	if($(this).scrollTop() > $(window).height()) {
		$('.to-top').fadeIn();
	} else {
		$('.to-top').fadeOut();
	}
});


//https://github.com/mattbanks/jQuery.equalHeights
$('.teaser-item').equalHeights();
$(window).resize(function() {
	$('.teaser-item').equalHeights();
});


//http://dimsemenov.com/plugins/magnific-popup/documentation.html
$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',
	fixedContentPos: false,
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
});


//https://github.com/bqworks/slider-pro
$('#my-slider').sliderPro({
	width: '80%',
	height: 700,
	loop: false,
	buttons: false,
	fade: true,
	autoplay: false,
	thumbnailWidth: 75,
	thumbnailHeight: 100,
	thumbnailsPosition: 'left',
	thumbnailPointer: true,
	fadeThumbnailArrows: true,
	thumbnailArrows: false,
	breakpoints: {
		992: {
			width: '90%',
			height: 590,
			thumbnailsPosition: 'bottom',
			thumbnailWidth: 60,
			thumbnailHeight: 80
		},
		768: {
			width: '100%',
			height: 550,
			thumbnailsPosition: 'bottom',
			thumbnailWidth: 50,
			thumbnailHeight: 70
		},
		680: {
			width: '100%',
			height: 480,
			thumbnailsPosition: 'bottom',
			thumbnailWidth: 50,
			thumbnailHeight: 70
		},
		620: {
			width: '100%',
			height: 430,
			thumbnailsPosition: 'bottom',
			thumbnailWidth: 50,
			thumbnailHeight: 70
		},
		580: {
			width: '100%',
			height: 400,
			thumbnailsPosition: 'bottom',
			thumbnailWidth: 50,
			thumbnailHeight: 70
		},
		500: {
			width: '100%',
			height: 350,
			thumbnailsPosition: 'bottom',
			thumbnailWidth: 50,
			thumbnailHeight: 70
		},
		480: {
			width: '70%',
			height: 460,
			buttons: true,
			thumbnailWidth: 0,
			thumbnailHeight: 0
		},
		440: {
			width: '70%',
			height: 430,
			buttons: true,
			thumbnailWidth: 0,
			thumbnailHeight: 0
		},
		400: {
			width: '70%',
			height: 390,
			buttons: true,
			thumbnailWidth: 0,
			thumbnailHeight: 0
		},
		380: {
			width: '70%',
			height: 370,
			buttons: true,
			thumbnailWidth: 0,
			thumbnailHeight: 0
		},
		340: {
			width: '70%',
			height: 320,
			buttons: true,
			thumbnailWidth: 0,
			thumbnailHeight: 0
		},
		320: {
			width: '70%',
			height: 310,
			buttons: true,
			thumbnailWidth: 0,
			thumbnailHeight: 0
		}
	}
});


});
