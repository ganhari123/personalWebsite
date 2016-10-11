$(document).ready(function() {

	


	// $(window).scroll(function () {
	//       //if you hard code, then use console
	//       //.log to determine when you want the 
	//       //nav bar to stick.  
 // 		//console.log($(window).scrollTop());
 // 		//console.log($('#bodyTitle').height());
	//     if ($(window).scrollTop() > $('#bodyTitle').height() - 1) {
	//       $('#navMenu').show();
	//       $('#navMenu').addClass('navbar-fixed-top');
	//       $('#itemContainer').hide();
	//       $('.enterSite').hide();
	     
	//       console.log('in');
	//     }
	//     if ($(window).scrollTop() < $('#bodyTitle').height() - 1) {
	//     	$('#navMenu').hide();
	//     	$('#navMenu').removeClass('navbar-fixed-top');
	//     	$('#itemContainer').show();
	//     	$('.enterSite').show();
	//     }


	//     if ($(window).scrollTop() > $('#bodyTitle').height() - 1) {

	//       $('#TitleMenu').show();
	//       $('#TitleMenu').addClass('navbar-fixed-bottom');
	//     }
	//     if ($(window).scrollTop() < $('#bodyTitle').height() - 1) {

	//      	$('#TitleMenu').hide();
	//      	$('#TitleMenu').removeClass('navbar-fixed-bottom');
	//     }

	//     //$("#bodyTitle").css("opacity", 0.8 - $(window).scrollTop() / 400);
	//    	$("#nameTitle").css("opacity", 0.8 - $(window).scrollTop() / 400);
	//    	$("#positionSubtitle").css("opacity", 0.8 - $(window).scrollTop() / 400);
	//    	$(".enterSite").css("opacity", 0.3 - $(window).scrollTop() / 50);
	//    	console.log(0.4 - ($(window).scrollTop() + $(window).height()) / 700);
	//    	//$("#contactMePanel").css("opacity", 0.1 + ($(window).scrollTop()) / 5000); 
	// });

	$('.enterSite').click(function(){
		$('#bodyTitle').animate({opacity: 0}, 1000, function(){
			$('#bodyTitle').hide();
		});
		
		setTimeout(
		  function() 
		  {
		    //do something special
		    $('#navMenu').show(500);
	    	$('#navMenu').addClass('navbar-fixed-top');
	    	$('#TitleMenu').show(500);
	        $('#TitleMenu').addClass('navbar-fixed-bottom');
	    	
		  }, 500);		

	});

	$('#TitleMenu').click(function(){
		
		$('#navMenu').hide(500);
	    $('#navMenu').removeClass('navbar-fixed-top');
	    $('#TitleMenu').hide(500);
	    $('#TitleMenu').removeClass('navbar-fixed-bottom');
		setTimeout(
		  function() 
		  {
		    //do something special
		    $('#bodyTitle').show(0, function(){
		    	$('#bodyTitle').animate({opacity: 0.8}, 1000);
		    });
	    	
		  }, 500);
	});

	// $('#TitleMenu').click(function(){
	// 	$('html, body').animate({
	// 	    scrollTop: 0
	// 	 }, 1000);
	// });

	$('#bodyTitle').mousemove(function(event){
    	$('.enterSite').css('opacity', '0.3');
    	timeout = setTimeout(function() {
        	console.log('Mouse idle for 3 sec');
        	$('.enterSite').css('opacity', '0');
    	}, 2000);
	});




}); 

  /*$('#con').click(function(){
    $('#contactMePanel').show(2);
    $('#resume').hide(2);
    $('#projects').hide(2);
    $('#menu').css('opacity', '0.72');
    $('#dummyPanel').css('background', 'none');
  	$('#dummyPanel').css('opacity', '1.0');
    $('#con').css('border-bottom', '4px solid #7f0000');
    $('#res').css('border-bottom', 'none');
    $('#proj').css('border-bottom', 'none');
  });

  $('#res').click(function(){
  	$('#contactMePanel').hide(2);
  	$('#dummyPanel').css('background', 'none');
  	$('#dummyPanel').css('opacity', '1.0');
  	$('#resume').show(2);
  	$('#projects').hide(2);
  	$('#menu').css('opacity', '0.72');
  	$('#res').css('border-bottom', '4px solid #7f0000');
  	$('#con').css('border-bottom', 'none');
  	$('#proj').css('border-bottom', 'none');
  });

  $('#proj').click(function(){

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

  		$('#contactMePanel').hide(2);
  		$('#dummyPanel').css('background', 'black');
  		$('#dummyPanel').css('opacity', '0.3');
	  	$('#resume').hide(2);
	  	$('#projects').show(2);
	  	$('#proj').css('border-bottom', '4px solid #7f0000');
	  	$('#menu').css('opacity', '1');
	  	$('#con').css('border-bottom', 'none');
	  	$('#res').css('border-bottom', 'none');
  	});
  	
  });

  $('#dummyPanel').click(function(){
  	$('#contactMePanel').hide(2);
  	$('#resume').hide(2);
  	$('#projects').hide(2);
  	$('#menu').css('opacity', '0.72');
  	$('#proj').css('border-bottom', 'none');
  	$('#con').css('border-bottom', 'none');
  	$('#res').css('border-bottom', 'none');
  });*/
