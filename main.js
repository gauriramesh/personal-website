//A JQuery function that creates a "Fading In" effect on the navigation buttons on scroll.
$(document).ready(function() {
	$(window).one("scroll", function() {
		$(".box1").hide().fadeIn();
		$(".box2").hide().fadeIn(500);
		$(".box3").hide().fadeIn(1500);
		$(".box4").hide().fadeIn(2500);
		$(".box5").hide().fadeIn(3500);
	});
});
