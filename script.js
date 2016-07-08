Enter file contents here
$(document).ready(function(){
  //to hide all P's
  $('.lambo_p').hide();
  $('.audi_p').hide();
  $('.ferrari_p').hide();
  //search for cars
  $('button').click(function() {
    var toSearch = $('input[name=search]').val();
  });
  //if audi r8 is clicked
  $('.audi').click(function() {
    $('.audi').addClass('img_click');
    
    $('.audi_p').show();
    $('.lambo').hide();
    $('.ferrari').hide();
    $('body').addClass('body_change');
  });
  $(this).dblclick(function() {
    $('.audi').removeClass('img_click');
    $('.audi').effect('bounce');
    $('.audi_p').hide();
    $('.lambo').show();
    $('.ferrari').show();
    $('body').removeClass('body_change');
  });
  //if lambo aventador is clicked
  $('.lambo').click(function() {
    $('.lambo').addClass('img_click');
    
    $('.lambo_p').show();
    $('.audi').hide();
    $('.ferrari').hide();
    $('body').addClass('body_change');
  });
  $(this).dblclick(function() {
    $('.lambo').removeClass('img_click');
    $('.lambo').effect('bounce');
    $('.lambo_p').hide();
    $('.audi').show();
    $('.ferrari').show();
    $('body').removeClass('body_change')
  });
  //if ferrari 488 is clicked
  $('.ferrari').click(function() {
    $('.ferrari').addClass('img_click');
    
    $('.ferrari_p').show();
    $('.audi').hide();
    $('.lambo').hide();
    $('body').addClass('body_change');
  });
  $(this).dblclick(function() {
    $('.ferrari').removeClass('img_click');
    $('.ferrari').effect('bounce');
    $('.ferrari_p').hide();
    $('.audi').show();
    $('.lambo').show();
    $('body').removeClass('body_change');
  });
});

