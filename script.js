$(document).ready(function(){
//After DOM has been loaded.
	$('.nav a,.footer a.up').click(function(e){
										  
	//Link has been clicked, jump to hash association.
		
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});

});
