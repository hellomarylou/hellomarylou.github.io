$(document).ready(function(){
	$(".accordion-content").hide();
	
	$(".accordion-toggle").click(function(){
		$(this).next(".accordion-content").slideToggle(500);
	});
});