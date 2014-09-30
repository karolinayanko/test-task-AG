$(document).ready(function() {
	$(document).foundation();

  setResponsiveImages();
  initHeadCarousel();
  initFootCarousel();
	openMobileMenu();

});

function setResponsiveImages(){
  $(".img-wrap").imgLiquid({
      fill: true,
      horizontalAlign: "center",
      verticalAlign: "center"
  });
}

function initHeadCarousel(){
  $(".bHeadSlider").owlCarousel({
  	navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    navigation: false,
    addClassActive: true,
    transitionStyle : "fade"
  });
}

function initFootCarousel(){
	var bFootSlider = $(".bFootSlider")

	bFootSlider.owlCarousel({
		pagination: false,
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		navigation: false,
		itemsCustom : [
			[320, 1],
			[640, 2],
			[800, 3],
			[1024, 4],
			[1280, 5]
		]
	});

	$(".bArrowRight").click(function(){
		bFootSlider.trigger('owl.next');
	});
	$(".bArrowLeft").click(function(){
		bFootSlider.trigger('owl.prev');
	});
}

function openMobileMenu(){
	 $('.bOpenMenuBtn').click(function(){
		$('header').toggleClass('jOpenMenu');
	});
};


function init() {
  window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 34,
          header = document.querySelector("header");
      if (distanceY > shrinkOn) {
          classie.add(header,"jSmaller");
      } else {
          if (classie.has(header,"jSmaller")) {
              classie.remove(header,"jSmaller");
          }
      }
  });
}
window.onload = init();
