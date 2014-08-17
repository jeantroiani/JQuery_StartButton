$(document).ready(function(){
  $('.start').click(function(){
    $('ul').slideToggle('fast');
  });
  $("#red").click(function(){
    $("html").removeClass("goGreen goBlue");
    $("html").toggleClass("goRed");
  });
  $("#blue").click(function(){
    $("html").removeClass("goGreen goRed");
    $("html").toggleClass("goBlue");
  });
  $("#green").click(function(){
    $("html").removeClass("goBlue goRed");
    $("html").toggleClass("goGreen");
  });  
}); 
