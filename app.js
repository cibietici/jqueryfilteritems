$(document).on('click', '.sweet', function(){
	$('li#id-Salt').hide(500);
	$('li#id-Sweet').show(500);
});
$(document).on('click', '.salt', function(){
	$('li#id-Salt').show(500);
     $('li#id-Sweet').hide(500);      
});
$(document).on('click', '.all', function(){
	$('li#id-Salt').show(500);
     $('li#id-Sweet').show(500);      
});