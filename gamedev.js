$( document ).ready(function() {

//Your jquery goes here
$("#bob").click(function(){
  $("#bob").fadeOut;
  $( "#bob" ).delay( 400 ).fadeOut( 200 );

	});

$("#bill").click(function(){
  $("#bill").fadeOut;
  $( "#bill" ).delay( 400 ).fadeOut( 200 );

	});
});