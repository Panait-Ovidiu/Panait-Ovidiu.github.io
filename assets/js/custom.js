$(document).ready(function(){
	"use strict";

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

    // 3. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	

// 4. SlideShows

var slideshow_VRBowlingGame = document.getElementById("slideshow_VRBowlingGame");
slideshow_VRBowlingGame.currentSlideIndex = 1;
showSlides(slideshow_VRBowlingGame.currentSlideIndex, slideshow_VRBowlingGame);

var slideshow_FPSGame = document.getElementById("slideshow_FPSGame");
slideshow_FPSGame.currentSlideIndex = 1;
showSlides(slideshow_FPSGame.currentSlideIndex, slideshow_FPSGame);

var slideshow_2DPlatformerGame = document.getElementById("slideshow_2DPlatformerGame");
slideshow_2DPlatformerGame.currentSlideIndex = 1;
showSlides(slideshow_2DPlatformerGame.currentSlideIndex, slideshow_2DPlatformerGame);

var slideshow_MemoryCardGame = document.getElementById("slideshow_MemoryCardGame");
slideshow_MemoryCardGame.currentSlideIndex = 1;
showSlides(slideshow_MemoryCardGame.currentSlideIndex, slideshow_MemoryCardGame);

var slideshow_SkateboardModel = document.getElementById("slideshow_SkateboardModel");
slideshow_SkateboardModel.currentSlideIndex = 1;
showSlides(slideshow_SkateboardModel.currentSlideIndex, slideshow_SkateboardModel);

var slideshow_PersonalWebsite = document.getElementById("slideshow_PersonalWebsite");
slideshow_PersonalWebsite.currentSlideIndex = 1;
showSlides(slideshow_PersonalWebsite.currentSlideIndex, slideshow_PersonalWebsite);

var slideshow_MyFarmGame = document.getElementById("slideshow_MyFarmGame");
slideshow_MyFarmGame.currentSlideIndex = 1;
showSlides(slideshow_MyFarmGame.currentSlideIndex, slideshow_MyFarmGame);

var slideshow_PSLGViewer = document.getElementById("slideshow_PSLGViewer");
slideshow_PSLGViewer.currentSlideIndex = 1;
showSlides(slideshow_PSLGViewer.currentSlideIndex, slideshow_PSLGViewer);

var slideshow_TourGuideApp = document.getElementById("slideshow_TourGuideApp");
slideshow_TourGuideApp.currentSlideIndex = 1;
showSlides(slideshow_TourGuideApp.currentSlideIndex, slideshow_TourGuideApp);

var slideshow_ScooreKeeperApp = document.getElementById("slideshow_ScooreKeeperApp");
slideshow_ScooreKeeperApp.currentSlideIndex = 1;
showSlides(slideshow_ScooreKeeperApp.currentSlideIndex, slideshow_ScooreKeeperApp);

var slideshow_InventoryApp = document.getElementById("slideshow_InventoryApp");
slideshow_InventoryApp.currentSlideIndex = 1;
showSlides(slideshow_InventoryApp.currentSlideIndex, slideshow_InventoryApp);

function plusSlides(n, slideshow) {
	showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
	showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
	var i;
	var slides = slideshow.getElementsByClassName("mySlides");
	var dots = slideshow.getElementsByClassName("demo");
	if (n > slides.length) { slideshow.currentSlideIndex = 1 }
	if (n < 1) { slideshow.currentSlideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideshow.currentSlideIndex - 1].style.display = "block";
	dots[slideshow.currentSlideIndex - 1].className += " active";
}
	
