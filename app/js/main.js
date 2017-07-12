var landingModule = {
	init: function(){
		var instance = this;
		instance.bindUI();
	},
	bindUI: function(){
		var instance = this;
		instance.initSimpleCarousel();
		instance.initAutoCarousel();
		instance.initTwoOptionsCarousel();
		instance.initScrollFix();
	},
	initSimpleCarousel: function(){
		$('.slick-slider').slick({
			infinite: true,
			dots: true,
		});
	},
	initAutoCarousel: function(){
		$('.slick-slider-auto').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false
		});
	},
	initTwoOptionsCarousel: function(){
		$('.slick-slider-two-options').slick({
			infinite: true,
			slidesToShow: 2,
			dots: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	},
	initScrollFix: function(){
		$(window).on('scroll',function(){
			$('#map').addClass('no-pointer-events');
			$(this).doTimeout( 'scroll', 250, function(){
				$('#map').removeClass('no-pointer-events');
			});
		})
	}
}

var productModule = {
	init: function(){
		var instance = this;
		instance.bindUI();
	},
	bindUI: function(){
		var instance = this;
		instance.initImageShuffle();
	},
	initImageShuffle: function(){
		$('.view-more-options img').click(function(){
			var bigImageContainer = $('.big-image-container');
			var currentImageContainer = $(this);
			var oldImgSrc = bigImageContainer.attr('src');
			var newImgSrc = currentImageContainer.attr('src');
				
			bigImageContainer.attr('src',newImgSrc);
			currentImageContainer.attr('src',oldImgSrc);
		});
	}
}

var farmacyModule = {
	init: function(){
		var instance = this;
		instance.bindUI();
	},
	bindUI: function(){
		var instance = this;
		instance.initProductPagination();
		instance.initSlider();
		instance.initDropdownSelector();
	},
	initProductPagination: function(){
		//Init Product Pagination
		var pages = $('.product-gallery-page');
		var totalPages = pages.length;
		$('.product-page-pagination').bootpag({
			total: totalPages,
			next: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
			prev: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
		}).on("page", function(event,num){
			console.log(num);
			pages.addClass('hide');
			$('.product-gallery-page-'+num).removeClass('hide');
			//$("#content").html("Insert content"); // some ajax content loading...
		});
	},
	initSlider: function(){
		//Init Carousel
		$('.slick-slider-auto').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false
		});
	},
	initDropdownSelector: function(){
		//Init Dropdowns Selectors
		$('select').select2();
	}
}