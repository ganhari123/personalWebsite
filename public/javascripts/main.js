$(document).ready(function() {


	var whichOne = '';

	$('.enterSite').click(function(){
		show();

	});

	$('#TitleMenu').click(function(){
		hideMe(whichOne);
	});

	$('.Contact').click(function(){
		show('#contactMePanel');
	});

	$('.Resume').click(function(){
		show('#resume');
	});

	$('.Project').click(function(){
		show('#projects');
	});

	$('#con').click(function(){
		console.log("HELLO");
		$('#contactMePanel').show();
		$('#contactMePanel').css('opacity', '0.6');
		whichOne = '#contactMePanel';
	});

	$('#bodyTitle').mousemove(function(event){
    	$('.enterSite').css('opacity', '0.7');
    	timeout = setTimeout(function() {
        	console.log('Mouse idle for 3 sec');
        	$('.enterSite').css('opacity', '0');
    	}, 2000);
	});

	function show(id) {
		$('#bodyTitle').slideUp(500);
		
		setTimeout(
		  function() 
		  {
		    //do something special
		    $('#navMenu').show(0, function(){
		    	$('#navMenu').animate({opacity: 0.6}, 1000);
		    });
		    
	    	$('#navMenu').addClass('navbar-fixed-top');
	    	$('#TitleMenu').show(0, function(){
	    		$('#TitleMenu').animate({opacity: 0.6}, 1000);
	    	});
	    	
	        $('#TitleMenu').addClass('navbar-fixed-bottom');
	    	showDiv(id);
	    	whichOne = id;
		  }, 500);
	} 

	function hideMe(id) {
		$('#navMenu').animate({opacity: 0}, 1000, function() {
			$('#navMenu').hide(0);
		});
		$(id).animate({opacity: 0}, 1000, function() {
			$(id).hide(0);
		});
	    $('#navMenu').removeClass('navbar-fixed-top');
	    $('#TitleMenu').animate({opacity: 0}, 1000, function(){
	    	$('#TitleMenu').hide(0);
	    	$('#TitleMenu').removeClass('navbar-fixed-bottom');
	    });
	    

		setTimeout(
		  function() 
		  {
		    //do something special
		    $('#bodyTitle').slideDown(500);
	    	
		  }, 500);
	}

	function showDiv(id) {
		$(id).show(0, function(){
		    $(id).animate({opacity: 0.6}, 1000);
		});
	}


}); 