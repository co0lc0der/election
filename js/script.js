$(document).ready(function(){
	$('button.close').on('click', function(){
		$('.modal').slideUp("fast");
		$('.overlay').fadeOut("fast");
	});

	$('.main_btn,[href="#tour"],[href="#sheldure"]').on('click', function(){
		$('.overlay').fadeIn("fast");
		$('.modal').slideDown("fast");
	});
	console.log('doc is loaded');
});