//google maps		
function initialize() {
	var homeLatlng = new google.maps.LatLng(47.546872,25, 25.620117);
	var myLatlng = new google.maps.LatLng(48.708635, 19.276199);
	var mapOptions = {
		center: homeLatlng,
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		scrollwheel: false,
		draggable: false,
		disableDoubleClickZoom: true
	};
	var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
	var marker = new google.maps.Marker ({
		position: myLatlng,
		map: map
	});
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(homeLatlng);
	});
}
//google maps initalization
google.maps.event.addDomListener(window, 'load', initialize);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-15381035-3', 'pumaja.com');
ga('send', 'pageview');