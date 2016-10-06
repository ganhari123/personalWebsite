$(document).ready(function() {
  $('#con').click(function(){
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
  		$('#dummyPanel').css('opacity', '0.6');
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
  });
});
