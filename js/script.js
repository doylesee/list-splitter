$(document).ready(function(){	
	// Sticky scroll for Header menu
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#header-sticky-js').offset().top;
		if (window_top > div_top) {
			$('#header-js').addClass('sticky');
		} else {
			$('#header-js').removeClass('sticky');
		}
	}
	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
	
	// Create smooth scroll for # anchor links
	$(function() {
		$('.header__menu ul li a').click(function() {			
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
		});
	});
});