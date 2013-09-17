$(function() {

	var $progressLoaded = false;
	var $widthLess34 = $("#width-less-34").is(":visible");

	$(window).resize(function() {
		$widthLess34 = $("#width-less-34").is(":visible");
	})

	//animated scrolling
	$("a[href^='#']").click(function() {
		var $scrollTo = 0;
		var $id = $(this).attr("href");
		if ($id.length > 1)
			$scrollTo = parseInt($($id).offset().top);
		$("html, body").animate({ scrollTop: $scrollTo+"px" });
		return false;
	})

	function selectActiveItem ($active) {
		$("#main-nav .active").removeClass("active");
		$("#" + $active).addClass("active");
	}
	

	//select active item menu
	$("#contact, #home, #projects").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView && visiblePartY != "bottom")
			selectActiveItem($(this).data("menu"));
	});

	//change identity background image
	$("#identity").click(function(){
		$(this).toggleClass("thinking");
	});
});