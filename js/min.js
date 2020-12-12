$(document).ready(function(){
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.7)');
    }	
	if(scroll>1400){
		$(".progress .progress-bar").css({
	   "animation-name": "animateBar",
       "animation-iteration-count": "1",
       "animation-timing-function": "ease-in",
       "animation-duration": "2.5s"})
	};
	
});
$('.counter').countUp({
  'time': 1000,
  'delay': 10
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dots:false,
	autoplay:true,	
	autoplayTimeout:3000,
	navText:[$(".carousel-left-icon .fa-arrow-circle-left"),$(".carousel-right-icon .fa-arrow-circle-right")],
    responsive:{
		320:{
			items:1
		},
        1000:{
            items:1
        }
    }
});	

    /*-------Image popup-------*/
	$(".gallery").magnificPopup({
    delegate: '.popingimg',
    type: "image",
    gallery: {
       enabled: true,
    }
}); 
/*------ isotope filter------*/
    $('.gallery').isotope({
    // options
    itemSelector:'.items',
});
	
	
  $('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');
	var selector= $(this).attr("data-filter");
	$(".gallery ").isotope({
		filter:selector
});
	return false;
});
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//Menu active
$(".navbar-nav .nav-item").click(function(){
	$(".navbar-nav .nav-item").removeClass("nav-active");
	$(this).addClass("nav-active");
	
	
})




});



/*-------------------------Javascript------------------------------------*/

   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };

	var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
});





