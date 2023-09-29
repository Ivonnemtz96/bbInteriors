(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
		//Megamenu Toggle
	}

	//Hidder bar
	if ($('.hidden-bar').length){
		//Menu Toggle Btn
		$('.toggle-hidden-bar').on('click', function() {
			$('body').addClass('active-hidden-bar');
		});

		//Menu Toggle Btn
		$('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function() {
			$('body').removeClass('active-hidden-bar');
		});
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();
		
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
			$(this).prev('.mega-menu').slideToggle(500);
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}


	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}

	// Three Item Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="icon far fa-angle-left"></span>', '<span class="icon far fa-angle-right"></span>'],
		});
	}
	
	// Three Item Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
			}
		});
	}
	
	// Three Item Carousel
	if ($('.team-carousel-rtl').length) {
		$('.team-carousel-rtl').owlCarousel({
			autoplay: true,
			loop: true,
			margin: 30,
			nav: true,
			rtl: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
			}
		});
	}

	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				},
			}
		});
	}

	// Project Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: false,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1400: {
					items: 4
				},
			}
		});
	}

	// Project Carousel
	if ($('.project-carousel-rtl').length) {
		$('.project-carousel-rtl').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			rtl: true,
			items: 1,
			smartSpeed: 700,
			autoplay: false,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1400: {
					items: 4
				},
			}
		});
	}

	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
		});
	}

	// Two Item Carousel
	if ($('.two-items-carousel').length) {
		$('.two-items-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				},
			}
		});
	}

	// Two Item Carousel
	if ($('.two-items-carousel-rtl').length) {
		$('.two-items-carousel-rtl').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			rtl: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				},
			}
		});
	}

	// Three Item Carousel
	if ($('.three-items-carousel').length) {
		$('.three-items-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				},
				1200: {
					items: 3
				},
			}
		});
	}

	// Four Item Carousel
	if ($('.four-items-carousel').length) {
		$('.four-items-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1400: {
					items: 4
				},
			}
		});
	}

	// Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				},
				1200: {
					items: 3
				},
				1400: {
					items: 4
				},
			}
		});
	}


	// Testinomials Carousel
	if ($('.testimonial-slider').length) {
		var slider = new Swiper ('.testimonial-slider', {
			slidesPerView: 1,
			centeredSlides: true,
			loop: true,
			loopedSlides: 6,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		var thumbs = new Swiper ('.testimonial-thumbs', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
		});
		slider.controller.control = thumbs;
		thumbs.controller.control = slider;

	}

	// Team Carousel
	if ($('.team-slider').length) {
		var slider = new Swiper ('.team-slider', {
			slidesPerView: 1,
			centeredSlides: false,
			loop: true,
			loopedSlides: 6,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		var thumbs = new Swiper ('.team-thumbs', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			centeredSlides: false,
			loop: true,
			slideToClickedSlide: true,
		});
		slider.controller.control = thumbs;
		thumbs.controller.control = slider;

	}

	//MixItup Gallery
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.15,
				'dynamicDraw': true,
				'displayInput': false
			});
			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});
			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}


	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

    // count Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                    var el = $(this);
                    var percent = el.data("percent");
                    $(el).css("width", percent).addClass("counted");
                }, {
                    accY: -50
            }
        );
    }

	//Quantity box
   $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
   });
   $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
   });
   
	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
    });
	};

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}

	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 0);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);