$(document).ready(function() {
  $('#con').click(function(){
    $('#contactMePanel').show(100);
    $('#resume').hide(100);
    $('#projects').hide(100);
    $('#con').css('border-bottom', '4px solid #7f0000');
    $('#res').css('border-bottom', 'none');
    $('#proj').css('border-bottom', 'none');
  });

  $('#res').click(function(){
  	$('#contactMePanel').hide(100);
  	$('#resume').show(100);
  	$('#projects').hide(100);
  	$('#res').css('border-bottom', '4px solid #7f0000');
  	$('#con').css('border-bottom', 'none');
  	$('#proj').css('border-bottom', 'none');
  });

  $('#proj').click(function(){
  	$('#contactMePanel').hide(100);
  	$('#resume').hide(100);
  	$('#projects').show(100);
  	$('#proj').css('border-bottom', '4px solid #7f0000');
  	$('#con').css('border-bottom', 'none');
  	$('#res').css('border-bottom', 'none');
  });

  $('#dummyPanel').click(function(){
  	$('#contactMePanel').hide(100);
  	$('#resume').hide(100);
  	$('#projects').hide(100);
  	$('#proj').css('border-bottom', 'none');
  	$('#con').css('border-bottom', 'none');
  	$('#res').css('border-bottom', 'none');
  });
});
