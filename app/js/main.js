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

var shoppingCartModule = {
	currencySymbol: '$',
	init: function(){
		var instance = this;
		instance.bindUI();
	},
	bindUI: function(){
		var instance = this;
		instance.initTooltip();
		instance.initCartCalculator();
		instance.bindRemoveProduct();
		instance.initFileMask();
	},
	initTooltip: function(){
		//Init Tooltip
		$('[data-toggle="tooltip"]').tooltip();
	},
	initCartCalculator: function(){
		var instance = this;

		$('.qty-input').on('input',function(e){
			var currentElement = $(this);
			instance.bindProductCalculator(currentElement);
		});
	},
	bindProductCalculator: function(currentElement){
		var instance = this;
		var currentQty = currentElement.val();
		var currentElementContainer = currentElement.parents('.product-container');
		var currentProductValue = currentElementContainer.find('.unitPrice').val();
		var totalPriceContainer = currentElementContainer.find('.totalPrice');

		//Set new product price
		var totalPrice = currentProductValue*currentQty;
		totalPriceContainer.val(totalPrice);
		currentElementContainer.find('.total-price p').text(instance.currencySymbol+totalPrice);

		instance.bindTotalCalculator();
	},
	bindTotalCalculator: function(){
		var instance = this;
		var subTotalInput = $('.subtotalInput');
		var subTotalContainer = $('.subtotal-container');
		var taxInput = $('.taxInput');
		var taxContainer = $('.tax-container');
		var totalInput = $('.totalInput');
		var totalContainer = $('.total-container');

		//Set Total Price
		var finalPrice = 0;
		var taxPrice = 0;
		var totalPriceElements = $('.totalPrice');

		totalPriceElements.each(function(){
			finalPrice += parseInt($(this).val());
		});

		subTotalInput.val(finalPrice);
		subTotalContainer.text(instance.currencySymbol + finalPrice);
		var totalTax = Math.round((finalPrice * 0.13) * 100) / 100;
		taxInput.val(totalTax)
		taxContainer.text(instance.currencySymbol + totalTax);
		totalInput.val(finalPrice+totalTax)
		totalContainer.text(instance.currencySymbol + (finalPrice+totalTax));
	},
	bindRemoveProduct: function(){
		var instance = this;

		$('.remove-btn').click(function(e){
			e.preventDefault();
			currentElementParent = $(this).parents('.product-container');
			currentElementParent.remove();


			instance.bindTotalCalculator();
		});
	},
	initFileMask: function(){
		//https://github.com/kartik-v/bootstrap-fileinput
		$(".recipe-info").fileinput({
			showCaption: false
		});
	}
}

var paymentMethodModule = {
	init: function(){
		var instance = this;
		instance.bindUI();
	},
	bindUI: function(){
		var instance = this;
		instance.initDropdownSelector();
		instance.toggleShippingForm();
	},
	initDropdownSelector: function(){
		//Init Dropdowns Selectors
		$('select').select2();
	},
	toggleShippingForm: function(){
		$('#checkToGo').on('change',function(){
			$('.shipping-information').toggleClass('hide');
		});
	}
}

