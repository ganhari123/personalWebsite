$(document).ready(function() {


	var whichOne = '';

	$('.enterSite').click(function(){
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
		  }, 500);

	});

	$('#TitleMenu').click(function(){
		hideMe(whichOne);
	});

	$('.Contact').click(function(){
		showMe('#contactMePanel');
	});

	$('.Resume').click(function(){
		showMe('#resume');
	});

	$('.Project').click(function(){
		showMe('#projects');
		$.get('/projects', function(data, status){
	      console.log(data);
	      $('.row > .col-md-5 > .panel.panel-default > .panel-heading').each(function(index, value){
	        $(this).text(data.projects[index].name);
	      });

	      $('.row > .col-md-5 > .panel.panel-default > .panel-body').each(function(index, value){
	        $(this).text(data.projects[index].description);
	      });
	      	$('.row > .col-md-10 > .panel.panel-default > .panel-body').text(data.projects[4].description);
	    	$('.row > .col-md-10 > .panel.panel-default > .panel-heading').text(data.projects[4].name);
	    });
	});

	$('#con').click(function(){
		console.log("HELLO");
		showMe('#contactMePanel');
		$('#projects').hide();
		$('#resume').hide();
		whichOne = '#contactMePanel';
	});

	$('#proj').click(function(){
		showMe('#projects');
		$('#contactMePanel').hide();
		$('#resume').hide();
	    $.get('/projects', function(data, status){
	      console.log(data);
	      $('.row > .col-md-5 > .panel.panel-default > .panel-heading').each(function(index, value){
	        $(this).text(data.projects[index].name);
	      });

	      $('.row > .col-md-5 > .panel.panel-default > .panel-body').each(function(index, value){
	        $(this).text(data.projects[index].description);
	      });
	      	$('.row > .col-md-10 > .panel.panel-default > .panel-body').text(data.projects[4].description);
	    	$('.row > .col-md-10 > .panel.panel-default > .panel-heading').text(data.projects[4].name);
	    });
    
  	});

  	$('#res').click(function(){
  		showMe('#resume');
  		$('#contactMePanel').hide();
		$('#projects').hide();
  	});

	$('#bodyTitle').mousemove(function(event){
    	$('.enterSite').css('opacity', '0.7');
    	timeout = setTimeout(function() {
        	console.log('Mouse idle for 3 sec');
        	$('.enterSite').css('opacity', '0');
    	}, 2000);
	});

	function showMe(id) {
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