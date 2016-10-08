$(document).ready(function() {

	window.sr = ScrollReveal();
	sr.reveal('#navMenu', { duration: 500 , reset: true, origin: 'top', scale: 1.0}, 50);

	$(window).scroll(function () {
	      //if you hard code, then use console
	      //.log to determine when you want the 
	      //nav bar to stick.  
	    console.log($(window).scrollTop());
	    console.log($('#bodyTitle').height());
	    if ($(window).scrollTop() > $('#bodyTitle').height() - 200) {
	      $('#navMenu').addClass('navbar-fixed-top');
	    }
	    if ($(window).scrollTop() < $('#bodyTitle').height() - 200) {
	     	$('#navMenu').removeClass('navbar-fixed-top');
	    }
 
	    if ($(window).scrollTop() > $('#bodyTitle').height() - 200) {
	      $('#navMenu').show();
	      $('#menu').show();
	      console.log('I AM IN');
	    }
	    if ($(window).scrollTop() < $('#bodyTitle').height() - 200) {
	     	$('#navMenu').hide();
	     	$('#menu').hide();
	    }

	    $("#bodyTitle").css("opacity", 1 - $(window).scrollTop() / 500);
	   	$("#nameTitle").css("opacity", 1 - $(window).scrollTop() / 500);
	   	$("#positionSubtitle").css("opacity", 1 - $(window).scrollTop() / 500); 
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
