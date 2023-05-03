/*********************************************************************************

    Version: 1.0

**********************************************************************************/

/**************************************************************
	
	STYLESHEET INDEXING
	|
	|
	|___ Data Background Image
	|___ Header Searchbox
	|
	|
	|___ END STYLESHEET INDEXING

***************************************************************/
$(function () {
	var lastScrollTop = 0;
	var $navbar = $('.navbar');
	var navbarHeight = $navbar.outerHeight();
	var movement = 0;
	var lastDirection = 0;
		$(window).scroll(function (event) 
			{
				var st = $(this).scrollTop();
				movement += st - lastScrollTop;
			if (st > lastScrollTop) {
				// scroll down
				if (lastDirection != 1) 
				{
					movement = 0;
				}
					var margin = Math.abs(movement);
				if (margin > navbarHeight) 
				{
					margin = navbarHeight;
				}
					margin = -margin;
					$navbar.css('margin-top', margin + "px")
					lastDirection = 1;
				} 
			else { 
				// scroll up
				if (lastDirection != -1) 
				{
					movement = 0;
				}
					var margin = Math.abs(movement);
				if (margin > navbarHeight) 
				{
					margin = navbarHeight;
				}
					margin = margin - navbarHeight;
					$navbar.css('margin-top', margin + "px")
					lastDirection = -1;
				}
					lastScrollTop = st;
				// console.log(margin);
			}
		);
	}
);	

(function ($) {
	'use strict';

	$(window).on('load', function () {
		dataBackgroundImage();
		haderSearchbox();
		heroSliderMargin();
		inNavigationPosition();
	});


	/* Data Background Image */
	function dataBackgroundImage() {
		$('[data-bgimage]').each(function () {
			var bgImageUrl = $(this).data('bgimage');
			$(this).css({
				'background-image': 'url(' + bgImageUrl + ')',
			});
		});
	}

	/* Header Searchbox */
	function haderSearchbox() {
		$('.header-searchtrigger').on('click', function () {
			$(this).find('.zmdi').toggleClass('zmdi-search zmdi-close');
			$(this).siblings('.header-searchbox').toggleClass('is-visible');
		});
	}

	/* Hero Slider Margin */
	function heroSliderMargin() {
		var headerHeight = $('.header').height();
		$('.heroslider').css({
			'min-height': 'calc(100vh - ' + headerHeight + 'px)'
		});
	}


	/* Navigation Position */
	function inNavigationPosition(){
		$('.in-navigation ul li').on('mouseenter mouseleave', function (e) {
			if ($('ul', this).length) {
				var elm = $('ul:first', this);
				var off = elm.offset();
				var l = off.left - $('body').offset().left;
				var w = elm.width();
	
				if( elm.find('ul').length ){
					w = elm.width() * 2;
				}
	
				var docW = $('body').width();
				var isEntirelyVisible = (l + w <= docW);
	
				if (!isEntirelyVisible) {
					$(this).addClass('overflow-element');
				} else {
					$(this).removeClass('overflow-element');
				}
			}
		});
	}


	/* Mobile Menu */
	$('nav.in-navigation1').meanmenu({
		meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
		meanMenuClose: '<i class="zmdi zmdi-close"></i>',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});
	
	

	/* Hero Slider Active */
	$('.heroslider-area').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		dots: false,
		arrows: true,
		prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
		nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="zmdi zmdi-chevron-right"></i></button>',
		fade: true,
		adaptiveHeight: true,
	});



	/* Blog Slider Active */
	$('.blog-slider-active').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		dots: false,
		autoplay: true,
		arrows: false,
		prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
		nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="zmdi zmdi-chevron-right"></i></button>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	/* Service Slider Active */
	$('.sevice-slider-active').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: false,
		dots: true,
		autoplay: true,
		arrows: false,
		prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
		nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="zmdi zmdi-chevron-right"></i></button>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

    
    
    
	/* Partners Slider Active */
    var partnersSlider = $('.partners-slider-active');
    partnersSlider.on('init afterChange', function(e){
		$(this).find('.slick-slide.slick-active').last().addClass('last-elem');
		$(this).find('.slick-slide.slick-active.slick-current').removeClass('first-elem last-elem');
	});
    
    partnersSlider.slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		centerMode: false,
		dots: true,
		autoplay: false,
		arrows: false,
		prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
		nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="zmdi zmdi-chevron-right"></i></button>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
                    slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
                    slidesToScroll: 3,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
                    slidesToScroll: 2,
				}
			}
		]
	});
    
  

	/* Team Slider Active */
	$('.team-member-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		dots: false,
		autoplay: true,
		arrows: true,
		prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
		nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="zmdi zmdi-chevron-right"></i></button>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	/* Testimonial Slider Active */
	var testimonialSlider = $('.testimonial-slider');

	testimonialSlider.on('init afterChange', function(e){
		$(this).find('.slick-slide.slick-active').first().addClass('first-elem');
		$(this).find('.slick-slide.slick-active').last().addClass('last-elem');
		$(this).find('.slick-slide:not(.slick-active)').removeClass('first-elem last-elem');
		$(this).find('.slick-slide.slick-active.slick-current').removeClass('first-elem last-elem');
	});

	testimonialSlider.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0',
		dots: false,
		arrows: true,
		prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
		nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="zmdi zmdi-chevron-right"></i></button>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/* Testimonial Slider Active */
	var testimonialSliderTwo = $('.testimonial-slider-2');
	testimonialSliderTwo.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0',
		dots: false,
		arrows: false,
        adaptiveHeight: true
	});
    
     /*--
    Accordion
    -------------------------*/
    $(".faequently-accordion").collapse({
        accordion:true,
        open: function() {
        this.slideDown(300);
      },
      close: function() {
        this.slideUp(300);
      }		
    });	

	/* Match Height */
	$('.heightmatch').matchHeight();


	/* Nice Select */
	$('select').niceSelect();



	/* Video Popup */
	$('.in-videobutton').modalVideo();



	/* Counter Up */
	$('.counter').counterUp({
		delay: 20,
		time: 3000
	});



	/* Scroll Up */
	$.scrollUp({
		scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});




})(jQuery);