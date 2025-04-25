(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {

			$('.js-fullheight').css('height', $(window).height());



		});

	};
	fullHeight();


/** 	var $el = $('.mainpartofdsgn ');
	var vinhight = $(window).height();
	var $standardheight = 600;
	if (vinhight > 800) {
		$el.css('position', 'absolute').css({

			top: ($(window).height() - $standardheight) / 2,
			left: 0,
			right: 0,
		});

	} else {
		$el.css('position', 'inherit');
	} **/

	$('#sidebarCollapse').on('click', function () {

		var vinwidth = $(window).width();
		if (vinwidth >= 481) {
			$('#sidebar').parent().toggleClass('active-left');
			$('#sidebar').toggleClass('active');
			if ($("#sidebar").hasClass("active")) {
				$("#sidebar").css({
					"transform": "translateX(-100%)",
					"width": "0px"
				});
				$(".fa-close").addClass("tooggled");

			} else {
				$("#sidebar").css({
					"transform": "translateX(0%)",
					"width": "186px"
				});
				$(".fa-close").removeClass("tooggled");
			}
		} else {
			$('#sidebar').toggleClass('active');
			$('#sidebar').parent().toggleClass('active-left');
			if ($("#sidebar").hasClass("active")) {
				$("#sidebar").css({
					"transform": "translateX(-100%)",
					"width": "0px"
				});
				$(".fa-close").addClass("tooggled");

			} else {
				$("#sidebar").css({
					"transform": "translateX(0%)",
					"width": "125px"
				});
				$(".fa-close").removeClass("tooggled");
			}
		}



	});



})(jQuery);

$(document).ready(function () {

	var uri = window.location.href;
	var res = uri.split("?mode=");
	res[1]

	if (res[1] == 'dark-mode') {
		$('body').addClass('dark-mode');
	}

	if (res[1] == 'normal-mode') {
		$('body').addClass('normal-mode');
	}



	$('#mainpartofdsgn div')
		.each(function (index) {
			var _this = this;
			setTimeout(function () {
				$(_this).fadeIn('slow');
			}, 1000 * index);
		});


	/** var $el = $('.mainpartofdsgn ');
				var vinhight =$(window).height(); 	
			     var  $standardheight= 600;
			if(vinhight>800)
			{
				$el.css('position', 'absolute').css({
					 
					top: ($(window).height() - $standardheight) / 2,
					left: 0,
					right:0,
				});
				
			}
			else
			{
				$el.css('position', 'inherit');
			} **/


	$('[data-toggle="tooltip"]').tooltip();

	$(".list-unstyled a,.logo").on('click touchend', function (e) {
		var hash = $(this).attr('href');

		if ($("body").hasClass("dark-mode")) {
			var hashash = hash + ("?mode=dark-mode");

			window.location.href = hashash;

		} else {
			var hashash = hash + ("?mode=normal-mode");

			window.location.href = hashash;

		}


		e.preventDefault();
	});

});

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}