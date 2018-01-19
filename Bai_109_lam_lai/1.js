 $(function(){
 $(window).scroll(function(){
 	if($('body').scrollTop()>40)
 	{
 		$('.logo').addClass('maucam')
	 	$('.navbar').addClass('nentrang')
	 	.removeClass('navbar-dark')
	 	.addClass('navbar-light')
	}
	else{
		$('.logo').removeClass('maucam')
	 	$('.navbar').removeClass('nentrang')
	 	.addClass('navbar-dark')
	 	.removeClass('navbar-light')
	}
 	
 })
})  
 