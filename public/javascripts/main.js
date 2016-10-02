$(document).ready(function() {
  $('#con').click(function(){
    $('#contactMePanel').show(2);
    $('#resume').hide(2);
    $('#projects').hide(2);
    $('#menu').css('opacity', '0.72');
    $('#con').css('border-bottom', '4px solid #7f0000');
    $('#res').css('border-bottom', 'none');
    $('#proj').css('border-bottom', 'none');
  });

  $('#res').click(function(){
  	$('#contactMePanel').hide(2);
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
  	});
  	$('#contactMePanel').hide(2);
  	$('#resume').hide(2);
  	$('#projects').show(2);
  	$('#proj').css('border-bottom', '4px solid #7f0000');
  	$('#menu').css('opacity', '1');
  	$('#con').css('border-bottom', 'none');
  	$('#res').css('border-bottom', 'none');
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
